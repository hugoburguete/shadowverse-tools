import { Link, useLoaderData, useParams } from 'react-router-dom';
import CardList from '../../components/CardList';
import Heading from '../../components/typography/Heading';
import { CardDragSource, DeckCard } from '../../entities/card';
import { GetDeckQuery } from '../../gql/generated/graphql';
import { transformDeckQueryToDeck } from '../../lib/helpers/card';

const ViewDeckPage = (): JSX.Element => {
  const deckData = useLoaderData() as GetDeckQuery;
  const { deckId } = useParams();

  const deck = transformDeckQueryToDeck(deckData);
  const cards: DeckCard[] = [deck.leader as DeckCard].concat(
    deck.deckList,
    deck.evolveList
  );

  return (
    <div className="min-h-full">
      <Heading level={1}>
        {deck.name} - {deck.format}
      </Heading>

      <Link to={`/deck/${deckId}/edit`}>View</Link>

      <div>
        <CardList
          cards={cards}
          showQuantity={true}
          source={CardDragSource.DECK}
        />
      </div>
    </div>
  );
};

export default ViewDeckPage;
