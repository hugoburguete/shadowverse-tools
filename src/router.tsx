import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/blocks/Layout/Layout';
import Home from './pages/Home';
import DeckBuilder from './pages/DeckBuilder';

let router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'deck-builder',
        Component: DeckBuilder,
      },
    ],
  },
]);

export default router;
