type LabelProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;

const Label = ({ className, children, ...rest }: LabelProps): JSX.Element => {
  return (
    <label className={`text-sm mr-4 dark:text-white ${className}`} {...rest}>
      {children}
    </label>
  );
};

export default Label;
