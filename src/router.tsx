import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from './components/blocks/Layout/Layout';
import CreateDeckPage from './pages/CreateDeckPage';
import EditDeckPage from './pages/EditDeckPage';
import editDeckLoader from './pages/EditDeckPage/loader';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ViewDeckPage from './pages/ViewDeckPage/ViewDeckPage';
import viewDeckLoader from './pages/ViewDeckPage/loader';
import FourOhFourPage from './pages/errors/404Page';
import GeneralErrorPage from './pages/errors/GeneralErrorPage';

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<GeneralErrorPage />}>
      <Route path="/" index element={<Home />} />
      <Route path="register" element={<RegistrationPage />} />
      <Route path="login" element={<LoginPage />} />
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
