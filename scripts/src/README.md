## Generate Theme Variables

> Get variables by [Figma API](https://www.figma.com/developers/api#get-local-variables-endpoint) is limited, so we've to update variables manually

1. Open [Design System 2024](#) in Figma
2. Run Figma Plugin [Variables2css](https://www.figma.com/community/plugin/1261234393153346915/variables2css)
3. Select Collections
4. Switch to `Config` and select `json` Type
5. Generate and Copy
6. Paste `json` to [packages/theme/src/v2/source/variables.json](../../packages/theme/src/v2/source/variables.json)
7. Run `pnpm run start` and select `Generate Theme Variables`
