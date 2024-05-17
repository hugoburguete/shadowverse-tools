export type HeadingProps = React.PropsWithChildren &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > & {
    /**
     * The level of the heading. e.g. Setting this to 1 outputs a h1 tag
     */
    level: 1 | 2 | 3 | 4;
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
          className={`text-3xl leading-9 mb-6 dark:text-white ${rest.className}`}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          {...rest}
          className={`text-2xl leading-8 dark:text-white mb-4 ${rest.className}`}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          {...rest}
          className={`text-xl leading-8 dark:text-white mb-4 ${rest.className}`}
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          {...rest}
          className={`text-md leading-8 dark:text-white mb-4 ${rest.className}`}
        >
          {children}
        </h4>
      );
    default:
      return null;
  }
};
