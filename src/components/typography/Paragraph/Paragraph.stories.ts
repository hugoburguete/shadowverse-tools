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
    children: 'Paragraph',
  },
};
