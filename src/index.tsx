import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_ENDPOINT,
  cache: new InMemoryCache({
    addTypename: false,
  }),
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
