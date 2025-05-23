import VibeMatchPhoneBg from '@/Images/VibeMatchPhoneBg.png';
import VibeMatchPhone01 from '@/Images/VibeMatchPhone01.png';
import VibeMatchPhone02 from '@/Images/VibeMatchPhone02.png';
import Image from 'next/image';
import DownloadSocialApps from '../DownloadSocialApps';

const SocialVibeMatch = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#A20030] min-h-[calc(100vh-64px)] relative overflow-hidden">
      <div className="flex flex-col gap-10 h-full py-32 pl-32 z-30">
        <h1 className="text-white text-[64px] font-bold w-[580px] leading-[64px] tracking-[-0.05em]">
          Find People Who Match Your Social Vibe
        </h1>
        <p className="w-[380px] font-normal leading-8 tracking-[-0.02em] text-[18px] text-white">
          Connect App is a social media app that allows users to connect and
          chat with people around the world daily; based on social preferences
          and at a social distance.
        </p>
        <DownloadSocialApps />
      </div>
      <div className="relative w-full z-10">
        <div className="absolute top-5 right-[160px] z-30 animate-down">
          <Image
            src={VibeMatchPhone01}
            alt="Phone"
            className="h-[646.94px] min-w-[321px]"
          />
        </div>
        <div className="absolute top-[90px] right-[350px] z-20 animate-up">
          <Image
            src={VibeMatchPhone02}
            alt="Phone"
            className="h-[581px] min-w-[254px]"
          />
        </div>
        <Image
          src={VibeMatchPhoneBg}
          alt="Social Vibe Match"
          className="absolute right-0 top-10 min-w-[836px] h-[660px] object-cover z-0"
        />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes upMotion {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes downMotion {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
        }

        .animate-up {
          animation: upMotion 3s ease-in-out infinite;
        }

        .animate-down {
          animation: downMotion 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SocialVibeMatch;
