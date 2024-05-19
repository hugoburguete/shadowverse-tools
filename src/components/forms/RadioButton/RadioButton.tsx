import Label from '../Label';

type RadioButtonProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

const RadioButton = ({
  children,
  className,
  ...rest
}: RadioButtonProps): JSX.Element => {
  return (
    <Label
      htmlFor={rest.id}
      className={`mt-0 px-2 py-1 border bg-transparent  rounded-lg appearance-none text-indigo-300 focus:border-indigo-400 focus:bg-transparent focus:outline-none focus:ring-indigo-400 sm:text-sm ${rest.checked ? 'border-indigo-300' : 'border-vulcan-800'} ${className}`}
    >
      {children}
      <input type="radio" className="hidden" {...rest} />
    </Label>
  );
};

export default RadioButton;
