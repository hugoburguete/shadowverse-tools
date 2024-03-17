import { Outlet } from 'react-router-dom';
import Header from '../Header';

export type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <main className="pt-20 bg-black">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
