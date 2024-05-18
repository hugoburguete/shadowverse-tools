export type ListProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > & {};

const ListItem = ({ children, className, ...rest }: ListProps): JSX.Element => {
  return (
    <li {...rest} className={`dark:text-vulcan-300 py-1 ${className || ''}`}>
      {children}
    </li>
  );
};

export default ListItem;
