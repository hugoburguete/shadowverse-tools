import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: 'Heading 1',
    level: 1,
  },
};

export const Heading2: Story = {
  args: {
    children: 'Heading 2',
    level: 2,
  },
};

export const Heading3: Story = {
  args: {
    children: 'Heading 3',
    level: 3,
  },
};

export const Heading4: Story = {
  args: {
    children: 'Heading 4',
    level: 4,
  },
};
