import { LoaderFunctionArgs } from 'react-router-dom';
import { client } from '../../apolloclient';
import { QUERY_GET_USER_DECKS } from '../../gql/queries/deck';

const loader = async ({ params }: LoaderFunctionArgs) => {
  const { data } = await client.query({
    query: QUERY_GET_USER_DECKS,
  });

  return data;
};

export default loader;
