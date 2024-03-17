export type BadgeProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & {};

const Badge = ({ children, ...rest }: BadgeProps) => {
  return (
    <div
      {...rest}
      className={`bg-black/50 text-white rounded-lg px-3 py-1 text-2xl ${rest.className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
