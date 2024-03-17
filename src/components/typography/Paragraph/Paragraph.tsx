export type ParagraphProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;

/**
 * UI component for paragraph
 */
const P = ({ children, ...rest }: ParagraphProps) => {
  return <p className={'text-white ' + rest.className}>{children} </p>;
};

export default P;
