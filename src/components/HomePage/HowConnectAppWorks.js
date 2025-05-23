import SocialCirclesPhone from '@/Images/SocialCirclesPhone.png';
import PhoneWithBackground from '../PhoneWithBackground';

const connectedData = [
  {
    step: '1',
    title: 'STEP ONE',
    description:
      'Go to the social circle page and click on a social circle that best suits your interest.',
  },
  {
    step: '2',
    title: 'STEP TWO',
    description: 'Swipe right or left indicating a want to connect or not.',
  },
  {
    step: '3',
    title: 'STEP THREE',
    description:
      'Connect with other users when you both swipe right and message each other instantly.',
  },
];

const HowConnectAppWorks = () => {
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
        <div className="w-1/2 lg:absolute top-0 left-0 flex items-center justify-center">
          <PhoneWithBackground src={SocialCirclesPhone} />
        </div>
        <div className="w-1/2 grid grid-cols-1 gap-5 ml-auto">
          {connectedData.map((data, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 bg-white rounded-3xl h-auto w-[562px] shadow-[0px_4px_24px_0px_#00000005] p-6"
            >
              <div className="shrink-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[rgba(162,0,48,0.31)] font-bold text-[40px] text-[#A20030] rounded-full flex items-center justify-center">
                  {data.step}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[28px] leading-[150%] tracking-[-0.05em] text-[#0B0D0E]">
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

export default HowConnectAppWorks;
