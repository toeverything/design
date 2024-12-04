import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import prettier from 'prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prettierConfig = JSON.parse(
  readFileSync(join(__dirname, '../../../.prettierrc'), { encoding: 'utf-8' })
);

/**
 * Write content to a file if the content is different from the old content.
 * @returns `true` if the file was written, `false` otherwise.
 */
export const writeIfChanged = (path: string, content: string) => {
  const folder = dirname(path);
  if (!existsSync(folder)) mkdirSync(folder);
  const old = existsSync(path) ? readFileSync(path, { encoding: 'utf-8' }) : '';
  if (old && old === content) return false;
  writeFileSync(path, content, { encoding: 'utf-8' });
  return true;
};

export const jsonToTs = async (
  variableList: Record<
    string,
    {
      value: Record<string, any>;
      export?: boolean;
      prefixLines?: string[];
      suffixLines?: string[];
      asConst?: boolean;
    }
  >
) => {
  let code = '';
  for (const [varName, { value, ...options }] of Object.entries(variableList)) {
    const {
      export: exportVar = true,
      prefixLines = [],
      suffixLines = [],
      asConst = false,
    } = options ?? {};

    if (prefixLines.length) {
      code += prefixLines.join('\n') + '\n';
    }
    code += `${exportVar ? 'export ' : ''}const ${varName} = ${JSON.stringify(
      value
    )}${asConst ? ' as const' : ''};`;
    if (suffixLines.length) {
      code += '\n' + suffixLines.join('\n');
    }
  }

  return await prettier.format(code, {
    parser: 'typescript',
    ...prettierConfig,
  });
};

// { 'a/b/c': 1, 'a/b/d': 2, 'a/e': 3 } => { a: { b: { c: 1, d: 2 }, e: 3 } }
export const unflatten = (obj: Record<string, any>) => {
  const result: Record<string, any> = {};
  for (const [key, value] of Object.entries(obj)) {
    const keys = key.split('/');
    let cursor = result;
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (i === keys.length - 1) {
        cursor[k] = value;
      } else {
        cursor[k] ??= {};
        cursor = cursor[k];
      }
    }
  }
  return result;
};
