type FormGroupProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

const FormGroup = ({
  children,
  className,
  ...rest
}: FormGroupProps): JSX.Element => {
  return (
    <div className={`flex items-center ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default FormGroup;
