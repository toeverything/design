import { InformationIcon } from '@blocksuite/icons';
import type { Meta, StoryFn } from '@storybook/react';

import { Input, type InputProps } from '.';

export default {
  title: 'UI/Input',
  component: Input,
} satisfies Meta<typeof Input>;

const Template: StoryFn<InputProps> = args => (
  <div style={{ width: '50%' }}>
    <Input {...args} />
  </div>
);

export const Default = Template.bind(undefined);
Default.args = {
  defaultValue: 'This is a default input',
};

export const WithPrefix = Template.bind(undefined);
WithPrefix.args = {
  defaultValue: 'This is a input with prefix',
  preFix: <InformationIcon />,
};

export const Large = Template.bind(undefined);
Large.args = {
  placeholder: 'This is a large input',
  size: 'large',
};
export const ExtraLarge = Template.bind(undefined);
ExtraLarge.args = {
  placeholder: 'This is a extraLarge input',
  size: 'extraLarge',
};

export const CustomWidth = Template.bind(undefined);
CustomWidth.args = {
  width: 300,
  placeholder: 'This is a custom width input, default is 100%',
};
export const ErrorStatus = Template.bind(undefined);
ErrorStatus.args = {
  status: 'error',
  placeholder: 'This is a error status input',
};
export const WarningStatus = Template.bind(undefined);
WarningStatus.args = {
  status: 'warning',
  placeholder: 'This is a warning status input',
};
export const Disabled = Template.bind(undefined);
Disabled.args = {
  disabled: true,
  placeholder: 'This is a disabled input',
};
