import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../Icon';
import { Icons } from '../../Icon/Icon';
import Navigation from '../Navigation';

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-2xl dark:text-white dark:bg-vulcan-900 ">
      <div className="max-w-5xl mx-auto flex flex-wrap p-3 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between">
          <Link
            to="/"
            className="flex text-white text-xl"
            onClick={() => setNavbarOpen(false)}
          >
            SVTools
          </Link>
          <button
            className="text-white cursor-pointer leading-none md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen && <Icon name={Icons.CLOSE_MENU} />}
            {!navbarOpen && <Icon name={Icons.HAMBURGER_MENU} />}
          </button>
        </div>

        <Navigation
          navbarOpen={navbarOpen}
          closeNavbar={() => setNavbarOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
