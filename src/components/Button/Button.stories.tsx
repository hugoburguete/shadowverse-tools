import type { Meta, StoryObj } from '@storybook/react';
import ButtonComponent from './Button';

const meta = {
  title: 'Forms/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
  },
};
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
  },
};
