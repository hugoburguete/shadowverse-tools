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
    <div className={`base-form-group ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default FormGroup;
