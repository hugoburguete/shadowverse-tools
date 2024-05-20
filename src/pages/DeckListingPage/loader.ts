import { LoaderFunctionArgs } from 'react-router-dom';
import { client } from '../../apolloclient';
import { QUERY_GET_USER_DECKS } from '../../gql/queries/deck';
import { getAuthCookies } from '../../state/auth';

const loader = async ({ params }: LoaderFunctionArgs) => {
  const { accessToken } = getAuthCookies();
  if (!accessToken) {
    return null;
  }

  const { data } = await client.query({
    query: QUERY_GET_USER_DECKS,
  });

  return data;
};

export default loader;
