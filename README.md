# Design

> Design System for the BlockSuite/AFFiNE.

## Modules

- [`@toeverything/theme`](packages/theme): Theme for the [AFFiNE](https://github.com/toeverything/AFFiNE) and [Blocksuite](https://github.com/toeverything/blocksuite).
- [`@toeverything/components`](packages/components): Basic components for the [AFFiNE](https://github.com/toeverything/AFFiNE) and [Blocksuite](https://github.com/toeverything/blocksuite).

## Components doc

https://toeverything.github.io/design/

## Theme usage

### Import

import css in top level

- In css
  ```css
  @import '@toeverything/theme/style.css';
  ```
- In js
  ```js
  import '@toeverything/theme/style.css';
  ```

### Use variable in TypeScript

```ts
import { cssVar } from '@toeverything/theme';
import { cssVarV2 } from '@toeverything/theme/v2';
```

### Presets

- **Preset Typography**:
  Styles are included in `@toeverything/theme/style.css`.

  ```ts
  import { style } from '@vanilla-extract/css';
  import { headlineRegular } from '@toeverything/theme/typography';

  const myStyle = style([
    headlineRegular,
    {
      // ...others
    },
  ]);
  ```

## License

[MPL-2.0](LICENSE)
