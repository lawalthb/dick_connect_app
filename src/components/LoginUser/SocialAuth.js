import FacebookIcon from '@/Images/Icons/facebookIcon.svg';
import GoogleIcon from '@/Images/Icons/GoogleIcon.svg';
import AppleIcon from '@/Images/Icons/AppleIcon.svg';
import LinkedInIcon from '@/Images/Icons/LinkedInIcon.svg';
import InstagramIcon from '@/Images/Icons/InstagramIcon.svg';
import TiktokIcon from '@/Images/Icons/TiktokIcon.svg';

const SocialAuth = () => {
  const socialHandles = [
    {
      name: 'Facebook',
      logo: <FacebookIcon aria-label="Facebook Logo" />,
      background: 'bg-[#1877F2]',
    },
    {
      name: 'Google',
      logo: <GoogleIcon aria-label="Google Logo" />,
      background: 'bg-white',
    },
    {
      name: 'Apple',
      logo: <AppleIcon aria-label="Apple Logo" />,
      background: 'bg-black',
    },
    {
      name: 'LinkedIn',
      logo: <LinkedInIcon aria-label="LinkedIn Logo" />,
      background: 'bg-[#0C64C5]',
    },
    {
      name: 'Instagram',
      logo: <InstagramIcon aria-label="Instagram Logo" />,
      background: 'bg-[#AB4690]',
    },
    {
      name: 'TikTok',
      logo: <TiktokIcon aria-label="TikTok Logo" />,
      background: 'bg-[#010101]',
    },
  ];
  return (
    <>
      <h2 className="font-normal text-base text-center leading-6 text-[#5C5C5C] mb-8">
        Login with your social account
      </h2>
      <div className="flex flex-col gap-4">
        {socialHandles.map((social, index) => (
          <div
            key={index}
            className={`h-14 flex justify-start pl-28 gap-4 items-center rounded-lg cursor-pointer drop-shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl  ${social.name == 'Google' ? 'border border-[#5C5C5C]' : ''}  ${social.background}`}
          >
            {social.logo}
            <span
              className={`font-medium text-4 ${social.name == 'Google' ? 'text-[#5C5C5C]' : 'text-white'} leading-6`}
            >
              {` Sign up with ${social.name}`}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SocialAuth;
