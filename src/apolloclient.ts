import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { createFragmentRegistry } from '@apollo/client/cache';
import { setContext } from '@apollo/client/link/context';
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename';
import Cookies from 'js-cookie';
import { FRAGMENT_SEARCH_CARDS } from './gql/queries/card';
import { searchCardsQueryField } from './gql/type-policies/search-cards.query';

const httpLink = new HttpLink({ uri: process.env.REACT_APP_API_ENDPOINT });
const removeTypenameLink = removeTypenameFromVariables();
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get('access-token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
// const link = from([removeTypenameLink, httpLink, authLink]);
const link = from([authLink, removeTypenameLink, httpLink]);
export const client = new ApolloClient({
  defaultOptions: {
    mutate: {
      errorPolicy: 'all',
    },
  },
  cache: new InMemoryCache({
    fragments: createFragmentRegistry(FRAGMENT_SEARCH_CARDS),
    typePolicies: {
      Query: {
        fields: {
          ...searchCardsQueryField(),
        },
      },
    },
  }),
  link,
});
