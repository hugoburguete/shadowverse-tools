import { Link, useLoaderData } from 'react-router-dom';
import P from '../../components/typography/Paragraph';
import { GetUserDecksQuery } from '../../gql/generated/graphql';

const DeckListingPage = () => {
  const { decks } = useLoaderData() as GetUserDecksQuery;

  return (
    <ul>
      {decks.edges?.map(({ node }) => (
        <li key={`user-deck-${node.id}`}>
          <P>
            <Link to={`/deck/${node.id}`}>{node.name}</Link>
          </P>
        </li>
      ))}
    </ul>
  );
};

export default DeckListingPage;
