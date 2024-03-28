import type { Meta, StoryObj } from '@storybook/react';
import InputComponent from './Input';

const meta = {
  title: 'Forms/Input',
  component: InputComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {},
};

export const Placeholder: Story = {
  args: {
    placeholder: 'Placeholder...',
  },
};
