import type { Meta, StoryObj } from '@storybook/react';
import CheckboxComponent from './Checkbox';

const meta = {
  title: 'Forms/Checkbox',
  component: CheckboxComponent,
  parameters: {
    layout: 'centered',
  },
  decorators: (Story) => (
    <>
      <Story />
      <Story />
      <Story />
    </>
  ),
} satisfies Meta<typeof CheckboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    children: 'checkbox',
  },
};
export const Checked: Story = {
  args: {
    children: 'checkbox',
    defaultChecked: true,
    checked: true,
  },
};
