import { ReactComponent as CloseMenuIcon } from './svgs/close-menu.svg';
import { ReactComponent as GithubIcon } from './svgs/github.svg';
import { ReactComponent as HamburgerMenuIcon } from './svgs/hamburger-menu.svg';
import { ReactComponent as InfoIcon } from './svgs/info.svg';
import { ReactComponent as TwitterIcon } from './svgs/twitter.svg';

export enum Icons {
  TWITTER,
  GITHUB,
  HAMBURGER_MENU,
  CLOSE_MENU,
  INFO,
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
    case Icons.CLOSE_MENU:
      return <CloseMenuIcon />;
    case Icons.INFO:
      return <InfoIcon />;
    default:
      return null;
  }
};

export default Icon;
