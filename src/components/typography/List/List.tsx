export type ListProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > & {};

const List = ({ children, className, ...rest }: ListProps): JSX.Element => {
  return (
    <ul
      {...rest}
      className={`pl-4 list-disc list-outside marker:text-indigo-800 ${className}`}
    >
      {children}
    </ul>
  );
};

export default List;
