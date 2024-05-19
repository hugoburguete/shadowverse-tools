import { Outlet, useMatches } from 'react-router-dom';
import Header from '../Header';

export type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = () => {
  const matches = useMatches();
  const isCreateDeckPage = matches.find((match) => match.pathname === '/deck');

  return (
    <>
      <Header />
      <main
        className={`pt-16 px-4 min-h-screen ${isCreateDeckPage ? 'h-screen' : ''}`}
      >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
