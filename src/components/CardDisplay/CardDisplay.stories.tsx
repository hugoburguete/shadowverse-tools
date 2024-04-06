import type { Meta, StoryObj } from '@storybook/react';
import { CardDisplay as CardDisplayComponent } from './CardDisplay';

const meta = {
  title: 'Components/CardDisplay',
  component: CardDisplayComponent,
  parameters: {
    layout: 'centered',
  },
  decorators: (Story) => (
    <div style={{ maxWidth: 200 }}>
      <Story />
    </div>
  ),
} satisfies Meta<typeof CardDisplayComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardDisplay: Story = {
  args: {
    card: {
      cardId: 'BP01-LD10',
      image: 'https://images.shadowcard.io/images/cards/BP01-LD10.jpg',
      name: 'Urias',
      class: 'Abbysscraft',
      type: 'Leader',
      rarity: { acronym: 'LG' },
    },
  },
};
