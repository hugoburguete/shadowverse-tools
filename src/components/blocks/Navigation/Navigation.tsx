import { useContext } from 'react';
import { AuthContext } from '../../../state/auth';
import { Icons } from '../../Icon/Icon';
import NavigationItem from '../../NavigationItem';
import SocialMediaLink from '../../SocialMediaLink';

export type NavigationProps = {
  navbarOpen: boolean;
  closeNavbar: () => void;
};

const Navigation = ({ navbarOpen, closeNavbar }: NavigationProps) => {
  const { authenticated, logout } = useContext(AuthContext);

  return (
    <div
      className={
        'md:flex flex-grow items-center' + (navbarOpen ? '' : ' hidden')
      }
    >
      <div className="mb-5 md:mb-0 md:ml-auto md:mr-auto font-4 flex flex-wrap flex-col md:flex-row items-center gap-1 md:gap-8 lg:gap-16 md:text-base text-1xl md:justify-center justify-items-start">
        <NavigationItem to="/">Home</NavigationItem>
        {!authenticated && (
          <>
            <NavigationItem to="/login" onClick={() => closeNavbar()}>
              Login
            </NavigationItem>
            <NavigationItem to="/register" onClick={() => closeNavbar()}>
              Register
            </NavigationItem>
          </>
        )}
        {authenticated && (
          <NavigationItem
            asButton
            onClick={() => {
              logout();
              closeNavbar();
            }}
          >
            Logout
          </NavigationItem>
        )}
        <NavigationItem to="/deck" onClick={() => closeNavbar()}>
          Create
        </NavigationItem>
        <NavigationItem to="/decks" onClick={() => closeNavbar()}>
          List
        </NavigationItem>
      </div>

      <div className="flex justify-center gap-3">
        <SocialMediaLink icon={Icons.TWITTER} url="https://twitter.com/" />
        <SocialMediaLink icon={Icons.GITHUB} url="https://github.com/" />
      </div>
    </div>
  );
};

export default Navigation;
