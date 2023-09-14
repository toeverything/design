import type { Meta, StoryFn } from '@storybook/react';

import { Button } from '../button';
import { Popover, type PopoverProps } from './popover.tsx';

export default {
  title: 'UI/Popover',
  component: Popover,
} as Meta<PopoverProps>;

const Template: StoryFn<PopoverProps> = args => {
  return (
    <>
      <Popover content={<div>111222</div>} {...args}>
        <Button>Click to open popover</Button>
      </Popover>
    </>
  );
};

export const DefaultAvatar = Template.bind(undefined);
DefaultAvatar.args = {};
