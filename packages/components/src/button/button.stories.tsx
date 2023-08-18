import { InformationIcon } from '@blocksuite/icons';
import type { Meta, StoryFn } from '@storybook/react';

import { Button, type ButtonProps } from './button';
export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    onClick: () => console.log('Click button'),
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind(undefined);
Default.args = {
  type: 'default',
  children: 'This is a default button',
  icon: <InformationIcon />,
};

export const Primary = Template.bind(undefined);
Primary.args = {
  type: 'primary',
  children: 'Content',
  icon: <InformationIcon />,
};

export const Disabled = Template.bind(undefined);
Disabled.args = {
  disabled: true,
  children: 'This is a disabled button',
};

export const LargeSizeButton = Template.bind(undefined);
LargeSizeButton.args = {
  size: 'large',
  children: 'This is a large button',
};

export const ExtraLargeSizeButton = Template.bind(undefined);
ExtraLargeSizeButton.args = {
  size: 'extraLarge',
  children: 'This is a extra large button',
};
