import { Deck } from '../../entities/card';
import { DeckValidator } from './DeckValidator';
import { GloryfinderDeckValidator } from './GloryfinderDeckValidator';
import { StandardDeckValidator } from './StandardDeckValidator';

export const getValidator = (deck: Deck): DeckValidator => {
  if (deck.format === 'gloryfinder') {
    return new GloryfinderDeckValidator(deck);
  }
  return new StandardDeckValidator(deck);
};
