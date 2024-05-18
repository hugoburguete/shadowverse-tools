import type { Meta, StoryObj } from '@storybook/react';
import ListItem from '../ListItem';
import ListComponent from './List';

const meta = {
  title: 'Typography/List',
  component: ListComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnorganisedList: Story = {
  args: {
    children: (
      <>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </>
    ),
  },
};
