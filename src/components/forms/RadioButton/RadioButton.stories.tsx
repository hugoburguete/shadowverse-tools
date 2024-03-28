import type { Meta, StoryObj } from '@storybook/react';
import RadioButtonComponent from './RadioButton';

const meta = {
  title: 'Forms/RadioButton',
  component: RadioButtonComponent,
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
} satisfies Meta<typeof RadioButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    children: 'radio',
  },
};
export const Checked: Story = {
  args: {
    children: 'radio',
    defaultChecked: true,
    checked: true,
  },
};
