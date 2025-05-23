import SocialCirclesPhone from '@/Images/SocialCirclesPhone.png';
import PhoneWithBackground from '../PhoneWithBackground';
import EllipseIcon from '@/Images/Icons/EllipseIcon';

const connectedData = [
  {
    title: 'Profile Page',
    description:
      'This show cases the user’s popularity on the app. It indicates, the number of posts, the number of likes and number of times connected.',
  },
  {
    title: 'Feed Page',
    description:
      'Once you connect with a user, you will be able to get updated information on what your new connect post on the app.',
  },
];

const Features = () => {
  return (
    <div className="mt-44">
      <div>
        <h2 className="font-bold text-[56px] text-[#0E0F10] text-center leading-[64px] tracking-[-0.05em]">
          How the connect app works
        </h2>
        <p className="w-[620px] mx-auto font-normal text-[18px] leading-[28px] tracking-[-0.02em] text-[#5C5F6E] mt-5 text-center">
          First or all, you need to download the connect app from the app store
          or play store. Then, sign up by filling out the appropriate
          information, post pictures/ videos of yourself.
        </p>
      </div>
      <div className="lg:relative w-full mt-36">
        <div className="w-1/2 lg:absolute top-0 right-0 flex items-center justify-center">
          <PhoneWithBackground src={SocialCirclesPhone} />
        </div>
        <div className="w-1/2 grid grid-cols-1 gap-5 mr-auto">
          {connectedData.map((data, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 rounded-3xl h-auto w-[562px] p-6"
            >
              <div className="shrink-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-[#A20030] rounded-full flex items-center justify-center">
                  <EllipseIcon />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[32px] leading-[32px] tracking-[-0.04em] text-black">
                  {data.title}
                </h3>
                <p className="w-80 font-normal text-base leading-[24px] tracking-[-0.02em] text-[#838696]">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
