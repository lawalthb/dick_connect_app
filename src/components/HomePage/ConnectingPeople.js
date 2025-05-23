import CowBoyIcon from '@/Images/Icons/CowBoyIcon';
import BrowserOutline from '@/Images/BrowserOutline.png';
import Image from 'next/image';
import VideoPlayer from '../VideoPlayer';

const ConnectingPeople = () => {
  return (
    <>
      <div className="flex gap-3 items-center justify-center w-[162px] h-10 bg-[rgba(162,0,48,0.29)] rounded-lg">
        <CowBoyIcon />
        <h3 className="font-medium text-base text-[#A20030]">Connect</h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-col text-start w-[40%]">
          <h1 className="text-[36px] font-bold leading-[42px] tracking-[-0.03em] mt-10 text-[#0B0D0E]">
            Connecting People
          </h1>
          <div className="font-normal leading-8 tracking-[-0.02em] text-[18px] text-[#5C5F6E] mt-5">
            <p>
              Connect App is a social media app that connects people,
              businesses, activities etc. ConnectApp uses the swipe left or
              right technology to allow users explore their interest by gaining
              various connections daily with different people around the world
              based on social circles like sports, music, gaming fashion etc.
            </p>
            <p className="mt-10">
              This social media app will be the first of its kind as it allows
              people to connect, make new friends, chat and meet with other
              people. Meeting new people can be challenging today. We live in a
              world where social distance is not just priority but impossible.
            </p>
          </div>
        </div>
        <div className="relative mt-5 w-[60%]">
          <Image
            src={BrowserOutline}
            alt="Browser Outline"
            className="w-[650px] h-[452px] max-w-full max-h-full"
          />
          <div className="absolute top-20 left-4.5 w-[620px] h-[360px] flex items-center justify-center">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectingPeople;
