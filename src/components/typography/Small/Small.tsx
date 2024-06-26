export type SmallProps = React.PropsWithChildren &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

/**
 * UI component for a small tag
 */
const Small = ({ children, ...rest }: SmallProps) => {
  return (
    <small className={'dark:text-vulcan-300 text-sm ' + rest.className}>
      {children}
    </small>
  );
};

export default Small;
