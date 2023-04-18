import { images } from '../../../assets';

export const FooterShard: React.FC = () => {
  const handleGitHubOnClick = () => {
    window.open('https://github.com/AlexandreFPGoncalves');
  };

  return (
    <img
      src={images.ghLogo}
      onClick={handleGitHubOnClick}
      className="transaction mt-[10%] flex h-6 w-6 cursor-pointer justify-center place-self-center invert hover:-translate-y-[1px]"
    />
  );
};
