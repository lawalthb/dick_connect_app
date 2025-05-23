import EllipseIcon from '@/Images/Icons/EllipseIcon';
import SocialCirclesPhone from '@/Images/SocialCirclesPhone.png';
import PhoneWithBackground from '../PhoneWithBackground';

const connectedData = [
  {
    title: 'Music',
    description:
      'Meet people around the world that are fanatics about music. Connect and explore new music or create new music with new people.',
  },
  {
    title: 'Movies/TV',
    description:
      'Meet people around the world that are fanatics about Movies. Connect and discuss your favourite movies/shows.',
  },
  {
    title: 'Gaming',
    description:
      'Meet people that love gaming. Connect and play online with new connects.',
  },
  {
    title: 'Connect Travel',
    description:
      'Meet people from a country of your choice. Travel virtually or plan for travel.',
  },
  {
    title: 'Party',
    description:
      'Meet people who love to party. Connect at a distance or party virtually with new connects.',
  },
];

const GetConnected = () => {
  return (
    <div className="mt-44">
      <h2 className="font-bold text-[56px] text-[#0E0F10] text-center leading-[64px] tracking-[-0.05em]">
        Get Connected in social circles
      </h2>
      <div className="lg:relative w-full mt-36">
        <div className="w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {connectedData.map((data, idx) => (
            <div key={idx} className="space-y-2 w-[235px]">
              <div className="w-14 h-14 bg-[#A20030] rounded-full flex items-center justify-center">
                <EllipseIcon />
              </div>
              <h3 className="font-bold text-[22px] leading-[38px] tracking-[-0.05em] text-[#0B0D0E]">
                {data.title}
              </h3>
              <p className=" font-normal text-base leading-[24px] tracking-[-0.02em] text-[#838696]">
                {data.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-1/2 lg:absolute top-0 right-0 flex items-center justify-center">
          <PhoneWithBackground src={SocialCirclesPhone} />
        </div>
      </div>
    </div>
  );
};

export default GetConnected;
