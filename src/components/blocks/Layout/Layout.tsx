import { Outlet } from 'react-router-dom';
import Header from '../Header';

export type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 px-3">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
