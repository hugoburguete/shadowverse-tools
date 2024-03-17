export type ParagraphProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >;

/**
 * UI component for paragraph
 */
const P = ({ children, ...rest }: ParagraphProps) => {
  return <p className={'dark:text-white ' + rest.className}>{children}</p>;
};

export default P;
