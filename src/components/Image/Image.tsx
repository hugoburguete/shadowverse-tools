export type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Image = ({ src, alt, ...rest }: ImageProps) => {
  return <img src={src} alt={alt} {...rest} />;
};

export default Image;
