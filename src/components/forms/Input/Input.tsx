type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = ({ className, ...rest }: InputProps): JSX.Element => {
  return (
    <input
      className={`px-2 py-1 border bg-transparent border-vulcan-800 rounded-lg appearance-none text-indigo-300 focus:border-indigo-400 focus:bg-transparent focus:outline-none focus:ring-indigo-400 sm:text-sm ${className ?? ''}`}
      {...rest}
    />
  );
};

export default Input;
