import type { Meta, StoryObj } from '@storybook/react';
import LoadingComponent from './Loading';

const meta = {
  title: 'Components/Loading',
  component: LoadingComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoadingComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {};
