import { LoaderFunctionArgs } from 'react-router-dom';
import { client } from '../../apolloclient';
import { QUERY_GET_DECK } from '../../gql/queries/deck';
import { getAuthCookies } from '../../state/auth';

const loader = async ({ params }: LoaderFunctionArgs) => {
  const { accessToken } = getAuthCookies();
  if (!accessToken) {
    return null;
  }

  const rawDeckId = params.deckId;
  const deckId = parseInt(rawDeckId || '');
  if (!deckId || isNaN(deckId)) {
    throw new Response('Not Found', { status: 404 });
  }

  const { data } = await client.query({
    query: QUERY_GET_DECK,
    variables: { id: deckId },
  });

  return data;
};

export default loader;
