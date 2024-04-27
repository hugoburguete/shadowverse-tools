import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../state/auth';
import Icon from '../../Icon';
import { Icons } from '../../Icon/Icon';

export type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { authenticated, logout } = useContext(AuthContext);

  return (
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <Link
            to="/"
            className="flex text-3xl text-white font-medium mb-4 md:mb-0"
          >
            SVTools
          </Link>
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Icon name={Icons.HAMBURGER_MENU} />
          </button>
        </div>
        <div
          className={
            'md:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <Link
              to="/"
              className="mr-11 pr-2 cursor-pointer text-gray-300 dark:text-white hover:text-white font-semibold tr04"
            >
              Home
            </Link>
            {!authenticated && (
              <>
                <Link
                  to="/login"
                  className="mr-11 pr-2 cursor-pointer text-gray-300 dark:text-white hover:text-white font-semibold tr04"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="mr-11 pr-2 cursor-pointer text-gray-300 dark:text-white hover:text-white font-semibold tr04"
                >
                  Register
                </Link>
              </>
            )}
            {authenticated && (
              <button
                className="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-300 dark:text-white hover:text-white font-semibold tr04"
                onClick={() => logout()}
              >
                Logout
              </button>
            )}
            <Link
              to="/deck-builder"
              className="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-300 dark:text-white hover:text-white font-semibold tr04"
            >
              Deck Builder
            </Link>
          </div>
          <a
            href="https://twitter.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="invisible md:visible"
          >
            <Icon name={Icons.TWITTER} />
          </a>
          <a
            href="https://github.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="pl-7 invisible md:visible"
          >
            <Icon name={Icons.GITHUB} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
