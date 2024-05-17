import Icon, { Icons } from '../Icon/Icon';

export type SocialMediaLinkProps = {
  icon: Icons;
  url: string;
};

const SocialMediaLink = ({ icon, url }: SocialMediaLinkProps) => {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <Icon name={icon} />
    </a>
  );
};

export default SocialMediaLink;
