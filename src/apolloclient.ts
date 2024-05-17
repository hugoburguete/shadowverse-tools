import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
  fromPromise,
} from '@apollo/client';
import { createFragmentRegistry } from '@apollo/client/cache';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename';
import Cookies from 'js-cookie';
import { FRAGMENT_SEARCH_CARDS } from './gql/queries/card';
import { MUTATION_REFRESH_USER_TOKEN } from './gql/queries/user';
import { searchCardsQueryField } from './gql/type-policies/search-cards.query';
import {
  REFRESH_TOKEN_COOKIE_KEY,
  clearAuthCookies,
  setAuthCookies,
} from './state/auth';

const httpLink = new HttpLink({ uri: process.env.REACT_APP_API_ENDPOINT });
const removeTypenameLink = removeTypenameFromVariables();
const authLink = setContext((_, { headers }) => {
  return appendAuthorizationHeader(headers);
});

const refreshTokenLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.extensions.code === 'TOKEN_EXPIRED') {
        return fromPromise(refreshAccessToken()).flatMap(() => {
          const oldHeaders = operation.getContext().headers;
          operation.setContext(appendAuthorizationHeader(oldHeaders));

          return forward(operation);
        });
      }
    }
  }
});

const link = from([authLink, refreshTokenLink, removeTypenameLink, httpLink]);
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

const appendAuthorizationHeader = (headers: any) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get('access-token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
};

const refreshAccessToken = async () => {
  try {
    const response = await client.mutate({
      mutation: MUTATION_REFRESH_USER_TOKEN,
      variables: {
        refreshToken: Cookies.get(REFRESH_TOKEN_COOKIE_KEY) || '',
      },
    });

    if (
      !response.data?.refreshToken.accessToken ||
      !response.data?.refreshToken.refreshToken
    ) {
      throw new Error("Couldn't refresh token. Please login.");
    }

    setAuthCookies(
      response.data?.refreshToken.accessToken,
      response.data?.refreshToken.refreshToken
    );
  } catch (err) {
    clearAuthCookies();
    window.location.href = '/login';

    throw err;
  }
};
