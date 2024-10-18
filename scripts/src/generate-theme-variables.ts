import { execSync } from 'child_process';
import { appendFileSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { jsonToTs, writeIfChanged } from './utils/writer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const THEME_V2_DIR = join(__dirname, '../../packages/theme/src/v2');
const VARIABLES_PATH = join(THEME_V2_DIR, 'variables.ts');
const VARIABLES_SOURCE_PATH = join(THEME_V2_DIR, 'source/variables.json');
const CHANGELOG_PATH = join(THEME_V2_DIR, 'CHANGELOG.md');

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

type Theme = {
  lightThemeV2: Record<string, string>;
  darkThemeV2: Record<string, string>;
};

function resolveVariablesTs() {
  const raw = readFileSync(VARIABLES_PATH, { encoding: 'utf-8' });
  const withoutExport = raw.replace(/export /g, '');
  const func = new Function(
    `${withoutExport}; return { lightThemeV2, darkThemeV2 };`
  );
  return func() as Theme;
}

type Change = {
  new: Record<string, string>;
  removed: Record<string, string>;
  changed: Record<string, [string, string]>;
};

const now = new Date();
const id = `${now.getFullYear()}-${
  now.getMonth() + 1
}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;

function colorMd(color: any, removed?: boolean) {
  const colorCode = removed ? `~~\`${color}\`~~` : `\`${color}\``;
  const preview = `<svg width="11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect stroke="rgba(0,0,0,0.1)" width="20" height="20" rx="4" fill="${color}" /></svg>`;
  return `${preview} ${colorCode}`;
}
function generateThemeChangeLog(prev: Theme, curr: Theme) {
  const prevLightTheme = prev.lightThemeV2;
  const prevDarkTheme = prev.darkThemeV2;
  const currLightTheme = curr.lightThemeV2;
  const currDarkTheme = curr.darkThemeV2;

  const ifEmpty = (rows: any[]) => (rows.length ? rows : ['None']);
  const mergeObj = (light: any, dark: any, source: any = {}) => {
    const keys = Array.from(
      new Set([...Object.keys(light), ...Object.keys(dark)])
    );
    return keys.reduce((acc, key) => {
      acc[key] = {};
      acc[key].light = light[key] || null;
      acc[key].dark = dark[key] || null;
      return acc;
    }, source);
  };
  const compare = (
    prev: Record<string, string>,
    curr: Record<string, string>
  ) => {
    const newThemeKeys = Object.keys(curr).filter(key => !prev[key]);
    const removedThemeKeys = Object.keys(prev).filter(key => !curr[key]);
    const changedThemeKeys = Object.keys(curr).filter(
      key => !!prev[key] && prev[key] !== curr[key]
    );

    return {
      new: newThemeKeys.reduce(
        (acc, key) => ({ ...acc, [key]: curr[key] }),
        {}
      ),
      removed: removedThemeKeys.reduce(
        (acc, key) => ({ ...acc, [key]: prev[key] }),
        {}
      ),
      changed: changedThemeKeys.reduce(
        (acc, key) => ({ ...acc, [key]: [prev[key], curr[key]] }),
        {}
      ),
    } satisfies Change;
  };

  const lightChange = compare(prevLightTheme, currLightTheme);
  const darkChange = compare(prevDarkTheme, currDarkTheme);
  const mergedChange = {
    new: mergeObj(lightChange.new, darkChange.new),
    removed: mergeObj(lightChange.removed, darkChange.removed),
    changed: mergeObj(lightChange.changed, darkChange.changed),
  };

  const changeLogMd = [
    `# ${id}`,
    '### New',
    '',
    ...ifEmpty(
      (Object.entries(mergedChange.new) as any[])
        .map(([key, { light, dark }]) =>
          [
            `- \`${key}\``,
            light ? `  - light:  ${colorMd(light)}` : '',
            dark ? `  - dark:  ${colorMd(dark)}` : '',
          ].filter(Boolean)
        )
        .flat()
    ),
    '',
    '### Removed',
    '',
    ...ifEmpty(
      (Object.entries(mergedChange.removed) as any[])
        .map(([key, { light, dark }]) =>
          [
            `- \`${key}\``,
            light ? `  - light:  ${colorMd(light, true)}` : '',
            dark ? `  - dark:  ${colorMd(dark, true)}` : '',
          ].filter(Boolean)
        )
        .flat()
    ),
    '',
    '### Updated',
    '',
    ...ifEmpty(
      (Object.entries(mergedChange.changed) as any[])
        .map(([key, { light, dark }]) =>
          [
            `- \`${key}\``,
            light
              ? `  - light:  ${colorMd(light[0])} → ${colorMd(light[1])}`
              : '',
            dark ? `  - dark:  ${colorMd(dark[0])} → ${colorMd(dark[1])}` : '',
          ].filter(Boolean)
        )
        .flat()
    ),
  ].join('\n');

  return {
    md: changeLogMd,
    change: { light: lightChange, dark: darkChange },
  };
}

function commit(changeLog: string) {
  const msg = changeLog.replace(/`/g, '\\`').replace(/"/g, '\\"');
  execSync('git add ' + VARIABLES_SOURCE_PATH);
  execSync('git add ' + VARIABLES_PATH);
  execSync('git add ' + CHANGELOG_PATH);
  // execSync(`git commit -m "feat(theme): update theme variables(${id})\n${changeLog}"`);
  execSync(
    `echo "feat(theme): update v2 theme variables(${id})\n\n${msg}" | git commit --file=-`
  );
}

const allowedCollections = ['Color variables'];
const dismissPrefix = ['Shadow/'];
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
        if (dismissPrefix.some(prefix => color.name.startsWith(prefix))) return;
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

  const previous = resolveVariablesTs();
  const { md } = generateThemeChangeLog(previous, {
    lightThemeV2: lightTheme,
    darkThemeV2: darkTheme,
  });

  const changed = writeIfChanged(VARIABLES_PATH, code);

  if (changed) {
    console.log('✅  Theme variables updated.');
    appendFileSync(CHANGELOG_PATH, `\n\n${md}`);
    commit(md);
  } else {
    console.warn('⚠️  Theme variables are up to date.');
  }
}

export default main;
