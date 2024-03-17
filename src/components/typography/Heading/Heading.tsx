export type HeadingProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > & {
    /**
     * The level of the heading. e.g. Setting this to 1 outputs a h1 tag
     */
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };

/**
 * UI component for heading
 */
export const Heading = ({ children, level = 1, ...rest }: HeadingProps) => {
  switch (level) {
    case 1:
      return (
        <h1
          {...rest}
          className={`text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6 ${rest.className}`}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          {...rest}
          className={`text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6 ${rest.className}`}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          {...rest}
          className={`text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6 ${rest.className}`}
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          {...rest}
          className={`text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6 ${rest.className}`}
        >
          {children}
        </h4>
      );
    case 5:
      return (
        <h5
          {...rest}
          className={`text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6 ${rest.className}`}
        >
          {children}
        </h5>
      );
    case 6:
      return (
        <h6
          {...rest}
          className={`text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6 ${rest.className}`}
        >
          {children}
        </h6>
      );
    default:
      return null;
  }
};
