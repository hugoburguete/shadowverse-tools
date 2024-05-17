import type { Meta, StoryObj } from '@storybook/react';
import { makeCard } from '../../../.storybook/factories/card';
import { CardSimplified } from '../../entities/card';
import { CardDisplay as CardDisplayComponent } from './CardDisplay';

const meta = {
  title: 'Components/CardDisplay',
  component: CardDisplayComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardDisplayComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardDisplay: Story = {
  args: {
    card: makeCard() as CardSimplified,
  },
};
