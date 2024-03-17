import { ReactComponent as TwitterIcon } from './twitter.svg';
import { ReactComponent as GithubIcon } from './github.svg';
import { ReactComponent as HamburgerMenuIcon } from './hamburger-menu.svg';

export enum Icons {
  TWITTER,
  GITHUB,
  HAMBURGER_MENU,
}

export type IconProps = {
  name: Icons;
};

const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case Icons.TWITTER:
      return <TwitterIcon />;
    case Icons.GITHUB:
      return <GithubIcon />;
    case Icons.HAMBURGER_MENU:
      return <HamburgerMenuIcon />;
    default:
      return null;
  }
};

export default Icon;
