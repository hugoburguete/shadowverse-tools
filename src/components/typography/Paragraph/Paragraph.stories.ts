import type { Meta, StoryObj } from '@storybook/react';
import ParagraphComponent from './Paragraph';

const meta = {
  title: 'Typography/Paragraph',
  component: ParagraphComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ParagraphComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paragraph: Story = {
  args: {
    className: 'text-center',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet.',
  },
};
