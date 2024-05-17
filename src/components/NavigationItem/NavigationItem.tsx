import { Link } from 'react-router-dom';

export type NavigationItemProps = React.PropsWithChildren & {
  /** Make this item a button instead of a link */
  asButton?: boolean;

  /** Click handler for buttons only */
  onClick?: () => void;

  /** Link URL */
  to?: string;
};

const NavigationItem = ({
  asButton,
  onClick,
  to,
  children,
}: NavigationItemProps): JSX.Element | null => {
  if (asButton) {
    return (
      <button
        className="cursor-pointer text-gray-300 dark:text-white hover:text-white font-semibold"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (!to) {
    return null;
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className="cursor-pointer text-gray-300 dark:text-white hover:text-white font-semibold"
    >
      {children}
    </Link>
  );
};

export default NavigationItem;
