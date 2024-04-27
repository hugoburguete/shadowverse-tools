import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { createFragmentRegistry } from '@apollo/client/cache';
import { setContext } from '@apollo/client/link/context';
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename';
import Cookies from 'js-cookie';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FRAGMENT_SEARCH_CARDS } from './gql/queries/card';
import { searchCardsQueryField } from './gql/type-policies/search-cards.query';
import './index.css';
import reportWebVitals from './reportWebVitals';

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
const apolloClient = new ApolloClient({
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const setThemeMode = (isDarkMode: boolean) => {
  var colorScheme = isDarkMode ? 'dark' : 'light';
  document.body.classList.add(colorScheme);
};

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
)
  setThemeMode(true);

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => setThemeMode(e.matches));

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
