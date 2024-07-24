import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import prettier from 'prettier';
import { fileURLToPath } from 'url';

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
  const folder = path.split('/').slice(0, -1).join('/');
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
    }
  >
) => {
  let code = '';
  for (const [varName, { value, ...options }] of Object.entries(variableList)) {
    const {
      export: exportVar = true,
      prefixLines = [],
      suffixLines = [],
    } = options ?? {};

    if (prefixLines.length) {
      code += prefixLines.join('\n') + '\n';
    }
    code += `${exportVar ? 'export ' : ''}const ${varName} = ${JSON.stringify(
      value
    )};`;
    if (suffixLines.length) {
      code += '\n' + suffixLines.join('\n');
    }
  }

  return await prettier.format(code, {
    parser: 'typescript',
    ...prettierConfig,
  });
};
