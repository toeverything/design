import { InformationIcon } from '@blocksuite/icons';
import type { Meta, StoryFn } from '@storybook/react';

import { IconButton, type IconButtonProps } from './icon-button';
export default {
  title: 'UI/IconButton',
  component: IconButton,
  argTypes: {
    onClick: () => console.log('Click button'),
  },
} as Meta<IconButtonProps>;

const Template: StoryFn<IconButtonProps> = args => <IconButton {...args} />;

export const Plain = Template.bind(undefined);
Plain.args = {
  children: <InformationIcon />,
};

export const Priamry = Template.bind(undefined);
Priamry.args = {
  type: 'primary',
  icon: <InformationIcon />,
};

export const Disabled = Template.bind(undefined);
Disabled.args = {
  disabled: true,
  icon: <InformationIcon />,
};
export const ExtraSmallSizeButton = Template.bind(undefined);
ExtraSmallSizeButton.args = {
  size: 'extraSmall',
  icon: <InformationIcon />,
};
export const SmallSizeButton = Template.bind(undefined);
SmallSizeButton.args = {
  size: 'small',
  icon: <InformationIcon />,
};
export const LargeSizeButton = Template.bind(undefined);
LargeSizeButton.args = {
  size: 'large',
  icon: <InformationIcon />,
};
