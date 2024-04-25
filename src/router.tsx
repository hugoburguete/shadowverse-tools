import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/blocks/Layout/Layout';
import DeckBuilder from './pages/DeckBuilder';
import Home from './pages/Home';
import RegistrationPage from './pages/RegistrationPage';

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
      {
        path: 'register',
        Component: RegistrationPage,
      },
    ],
  },
]);

export default router;
