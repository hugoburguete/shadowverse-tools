import { Link } from 'react-router-dom';

export type ButtonProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    asLink?: boolean;
    to?: string;
  };

const Button = ({
  children,
  to,
  asLink = false,
  ...rest
}: ButtonProps): JSX.Element => {
  // TODO: Filled and unfilled, primary and secondary buttons return ( <button

  if (asLink) {
    return (
      <Link
        to={to as string}
        className={`inline-block px-5 py-2 border bg-transparent
      border-vulcan-800 rounded-lg appearance-none text-indigo-300
        hover:text-indigo-400 focus:border-indigo-300 focus:bg-transparent
        focus:outline-none hover:bg-indigo-300/5 sm:text-sm ${rest.className}`}
      >
        {children}
      </Link>
    );
  }
  // className={`px-5 py-2 border bg-indigo-400 border-vulcan-800 rounded-lg
  //   appearance-none text-white hover:text-indigo-400 focus:border-indigo-300
  //     focus:bg-transparent focus:outline-none hover:bg-indigo-300/5
  //     sm:text-sm ${rest.className ?? ''}`} {...rest}
  //   >
  //     {children}
  //   </button> );

  return (
    <button
      className={`px-5 py-2 border bg-transparent
    border-vulcan-800 rounded-lg appearance-none text-indigo-300
      hover:text-indigo-400 focus:border-indigo-300 focus:bg-transparent
      focus:outline-none hover:bg-indigo-300/5 sm:text-sm ${
        rest.className ?? ''
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
