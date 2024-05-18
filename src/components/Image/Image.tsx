export type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  aspectRatio: string;
};

const Image = ({ src, alt, aspectRatio, className, ...rest }: ImageProps) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      style={{
        aspectRatio,
      }}
      className={`w-full object-contain ${className}`}
      {...rest}
    />
  );
};

export default Image;
