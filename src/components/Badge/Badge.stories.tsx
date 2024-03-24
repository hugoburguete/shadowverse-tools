import type { Meta, StoryObj } from '@storybook/react';
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
      <CardDisplay
        card={{
          cardId: 'BP01-LD10',
          image: 'https://images.shadowcard.io/images/cards/BP01-LD10.jpg',
          name: 'Urias',
          class: 'Abbysscraft',
          type: 'Leader',
          rarity: 'LG',
        }}
      />
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
