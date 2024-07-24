import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { jsonToTs, writeIfChanged } from './utils/writer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const THEME_V2_DIR = join(__dirname, '../../packages/theme/src/v2');
const VARIABLES_PATH = join(THEME_V2_DIR, 'variables.ts');
const VARIABLES_SOURCE_PATH = join(THEME_V2_DIR, 'source/variables.json');

type VariableCollection = {
  name: string;
  values: VariableMode[];
};
type VariableMode = {
  mode: {
    name: 'Light' | 'Dark';
    id: string;
  };
  color: ColorVariable[];
  number: [];
  string: [];
};
type ColorVariable = {
  name: string;
  value: string;
  var: string;
  rootAlias: string;
};

function lowerCamelCaseVarName(name: string) {
  const nameParts = name.split('/');
  return nameParts.map(part => part[0].toLowerCase() + part.slice(1)).join('/');
}

const allowedCollections = ['Color variables'];
async function main() {
  const rawVariables = readFileSync(VARIABLES_SOURCE_PATH, {
    encoding: 'utf-8',
  });
  const variableCollections = JSON.parse(rawVariables) as VariableCollection[];

  const lightTheme: Record<string, string> = {};
  const darkTheme: Record<string, string> = {};

  variableCollections.forEach(collection => {
    if (!allowedCollections.includes(collection.name)) return;

    collection.values.forEach(mode => {
      const cursor =
        mode.mode.name === 'Light'
          ? lightTheme
          : mode.mode.name === 'Dark'
          ? darkTheme
          : null;
      if (!cursor) return;

      // resolve color
      mode.color.forEach(color => {
        cursor[lowerCamelCaseVarName(color.name)] = color.value;
      });
    });
  });

  // check if light/dark variables are the same
  const lightKeys = Object.keys(lightTheme);
  const darkKeys = Object.keys(darkTheme);
  const lightDiff = lightKeys.filter(key => !darkKeys.includes(key));
  const darkDiff = darkKeys.filter(key => !lightKeys.includes(key));
  if (lightDiff.length || darkDiff.length) {
    console.error('⚠️  Light and dark themes have different variables:');
    if (lightDiff.length) {
      console.error('  Light only:', lightDiff.join(', '));
    }
    if (darkDiff.length) {
      console.error('  Dark only:', darkDiff.join(', '));
    }
    return;
  }

  // write to file
  const doNotModify = [
    '// AUTO-GENERATED',
    '// This file is generated by scripts/src/generate-theme-variables.ts',
    '// ⚠️ Do not modify this file directly!',
    '',
  ];
  const code = await jsonToTs({
    lightThemeV2: { value: lightTheme, prefixLines: doNotModify },
    darkThemeV2: { value: darkTheme },
  });

  const changed = writeIfChanged(VARIABLES_PATH, code);

  if (changed) {
    console.log('✅  Theme variables updated.');
  } else {
    console.warn('⚠️  Theme variables are up to date.');
  }
}

export default main;
