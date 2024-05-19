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
    <P className={`base-label ${className}`}>{children}</P>;
  }
  return (
    <label className={`base-label ${className}`} {...rest}>
      {children}
    </label>
  );
};

export default Label;
