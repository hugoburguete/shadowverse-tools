import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './components/blocks/Layout';
import CreateDeckPage from './pages/CreateDeckPage';
import DeckListingPage, {
  loader as deckListingPageLoader,
} from './pages/DeckListingPage';
import EditDeckPage, { loader as editDeckLoader } from './pages/EditDeckPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ViewDeckPage, { loader as viewDeckLoader } from './pages/ViewDeckPage';
import FourOhFourPage from './pages/errors/404Page';
import GeneralErrorPage from './pages/errors/GeneralErrorPage';

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<GeneralErrorPage />}>
      <Route path="/" index element={<HomePage />} />

      {/* User routes */}
      <Route path="register" element={<RegistrationPage />} />
      <Route path="login" element={<LoginPage />} />

      {/* Deck routes */}
      <Route
        path="decks"
        element={<DeckListingPage />}
        loader={deckListingPageLoader}
      />
      <Route path="deck" element={<CreateDeckPage />} />

      <Route path="/deck/:deckId">
        <Route path="" loader={viewDeckLoader} element={<ViewDeckPage />} />
        <Route path="edit" loader={editDeckLoader} element={<EditDeckPage />} />
      </Route>

      <Route path="*" element={<FourOhFourPage />} />
    </Route>
  )
);

export default router;
