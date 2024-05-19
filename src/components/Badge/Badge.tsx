export type BadgeProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & {};

const Badge = ({ children, ...rest }: BadgeProps) => {
  return (
    <div
      {...rest}
      className={`bg-vulcan-900/50 text-white rounded-lg px-2 sm:px-3 md:px-2 lg:px-3 sm:py-1 md:py-0 lg:py-1 text-base sm:text-2xl md:text-base lg:text-2xl ${rest.className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
