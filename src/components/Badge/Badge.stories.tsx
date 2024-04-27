import type { Meta, StoryObj } from '@storybook/react';
import { makeCard } from '../../../.storybook/factories/card';
import { CardSimplified } from '../../entities/card';
import CardDisplay from '../CardDisplay';
import BadgeComponent from './Badge';

const meta = {
  title: 'Components/CardDisplay',
  component: BadgeComponent,
  parameters: {
    layout: 'centered',
  },
  decorators: (Story) => (
    <div className="relative w-52">
      <Story />
      <CardDisplay card={makeCard() as CardSimplified} />
    </div>
  ),
} satisfies Meta<typeof BadgeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Badge: Story = {
  args: {
    children: '3',
    className: 'absolute m-2',
  },
};
