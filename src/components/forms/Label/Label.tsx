import P from '../../typography/Paragraph';

type LabelProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > & {
    faux?: boolean;
  };

const Label = ({
  className,
  children,
  faux = false,
  ...rest
}: LabelProps): JSX.Element => {
  if (faux) {
    <P className={`text-sm mr-4 dark:text-white ${className}`}>{children}</P>;
  }
  return (
    <label className={`text-sm mr-4 dark:text-white ${className}`} {...rest}>
      {children}
    </label>
  );
};

export default Label;
