import { InformationIcon } from '@blocksuite/icons';
import type { Meta, StoryFn } from '@storybook/react';

import { IconButton } from '../button';
import { Tooltip, type TooltipProps } from '.';

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

const Template: StoryFn<TooltipProps> = args => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Tooltip {...args}>
      <IconButton size="large">
        <InformationIcon />
      </IconButton>
    </Tooltip>
  </div>
);

export const Default = Template.bind(undefined);
Default.args = {
  content: 'This is a tooltip',
};

export const LongContent = Template.bind(undefined);
LongContent.args = {
  content: (
    <>
      Never give up, Never lose hope. Always have faith, It allows you to cope.
      Trying times will pass, As they always do. Just have patience, Your dreams
      will come true. So put on a smile, You`ll live through your pain. Know it
      will pass, And strength you will gain
    </>
  ),
};
