import type { Meta, StoryObj } from '@storybook/react';
import SmallComponent from './Small';

const meta = {
  title: 'Typography/Small',
  component: SmallComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SmallComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet.',
  },
};
