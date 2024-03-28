import type { Meta, StoryObj } from '@storybook/react';
import LabelComponent from './Label';

const meta = {
  title: 'Forms/Label',
  component: LabelComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LabelComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    className: 'text-center',
    children: 'Label component',
  },
};
