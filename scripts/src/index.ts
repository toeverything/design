import inquirer from 'inquirer';

type Script = {
  name: string;
  path: string;
  description?: string;
};
const scripts: Script[] = [
  {
    name: 'Generate Theme Variables',
    description:
      'Generate theme variables from Figma, please make sure your have update `variables.json` in `packages/theme/src/v2/source`.',
    path: './generate-theme-variables',
  },
];

(async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'script',
      message: 'Choose a script to run:',
      choices: scripts.map(script => ({
        name: `● ${script.name}`,
        value: script.name,
        description: script.description,
      })),
    },
  ]);

  const selectedScript = scripts.find(script => script.name === answers.script);

  if (selectedScript) {
    const { default: runScript } = await import(selectedScript.path + '.js');
    runScript();
  } else {
    console.error('Script not found.');
  }
})();
