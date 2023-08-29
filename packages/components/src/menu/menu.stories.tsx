import { InformationIcon } from '@blocksuite/icons';
import type { Meta, StoryFn } from '@storybook/react';
import { useState, type ReactNode } from 'react';

import { Button } from '../button';
import { Tooltip } from '../tooltip';
import {
  Menu,
  MenuIcon,
  MenuItem,
  type MenuItemProps,
  type MenuProps,
  MenuSeparator,
  MenuSub,
} from '.';

export default {
  title: 'UI/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

const Template: StoryFn<MenuProps> = args => (
  <Menu {...args}>
    <Button>menu trigger</Button>
  </Menu>
);

interface Items {
  label: ReactNode;
  type?: MenuItemProps['type'];
  preFix?: MenuItemProps['preFix'];
  disabled?: boolean;
  divider?: boolean;
  subItems?: Items[];
}

const items: Items[] = [
  {
    label: 'default menu item 1',
  },
  {
    label: 'menu item with icon',
    preFix: (
      <Tooltip content="Use `MenuIcon` to wrap your icon and choose `preFix` or `endFix`">
        <MenuIcon>
          <InformationIcon />
        </MenuIcon>
      </Tooltip>
    ),
  },
  {
    label: (
      <Tooltip
        align="start"
        content="Write, Draw, and Plan All at Once Notion Open Source Alternative One
          hyper-fused platform for wildly creative minds"
      >
        <span>
          Write, Draw, and Plan All at Once Notion Open Source Alternative One
          hyper-fused platform for wildly creative minds
        </span>
      </Tooltip>
    ),
  },
  {
    label: 'default disabled menu item',
    disabled: true,
  },
  {
    label: 'danger menu item',
    type: 'danger',
  },
  {
    label: 'warning menu item',
    type: 'warning',
    divider: true,
  },

  {
    label: 'menu item with sub menu',
    subItems: [
      {
        label: 'sub menu item 1',
      },
      {
        label: 'sub menu item 1',
      },
    ],
  },

  {
    label: 'menu item with deep sub menu',
    subItems: [
      {
        label: 'sub menu item 1',
      },
      {
        label: 'sub menu with sub',
        subItems: [
          {
            label: 'sub menu item 2-1',
          },
          {
            label: 'sub menu item 2-2',
          },
        ],
      },
    ],
  },
];

export const Default = Template.bind(undefined);

const ItemRender = ({ label, divider, subItems, ...otherProps }: Items) => {
  if (subItems) {
    return (
      <>
        <MenuSub
          items={subItems.map((props, i) => (
            <ItemRender {...props} key={i} />
          ))}
          triggerOptions={otherProps}
        >
          {label}
        </MenuSub>
        {divider ? <MenuSeparator /> : null}
      </>
    );
  }

  return (
    <>
      <MenuItem {...otherProps}>{label}</MenuItem>
      {divider ? <MenuSeparator /> : null}
    </>
  );
};

Default.args = {
  items: items.map((props, i) => {
    return <ItemRender {...props} key={i} />;
  }),
};

const selectList = [
  { name: 'AFFiNE', value: '1' },
  { name: 'blocksuite', value: '2' },
  { name: 'octobase', value: '3' },
  { name: 'virgo', value: '4' },
];
const SelectItems = ({
  selectedValue,
  onSelect,
}: {
  selectedValue: string;
  onSelect: (value: string) => void;
}) => {
  return selectList.map(({ name, value }) => (
    <MenuItem
      key={value}
      selected={selectedValue === value}
      onSelect={() => onSelect(value)}
    >
      {name}
    </MenuItem>
  ));
};

const AsSelectTemplate: StoryFn<MenuProps> = () => {
  const [value, setValue] = useState('1');

  return (
    <Menu items={<SelectItems selectedValue={value} onSelect={setValue} />}>
      <Button>menu as select</Button>
    </Menu>
  );
};

export const AsSelect = AsSelectTemplate.bind({});
