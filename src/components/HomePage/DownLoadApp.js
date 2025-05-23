import Image from 'next/image';
import DownloadSocialApps from '../DownloadSocialApps';
import HoldingPhone from '@/Images/HoldingPhone.png';

const DownLoadApp = () => {
  return (
    <div className=" w-full flex bg-[#A20030] mt-40">
      <div className="w-1/2 pl-32 pr-16 py-52 ">
        <h3 className="text-white font-bold text-[56px] leading-[64px] tracking-[-0.05em] mb-10">
          Download Connect App Today
        </h3>
        <DownloadSocialApps />
      </div>
      <div className="w-1/2 pt-20">
        <Image src={HoldingPhone} alt="Phone" />
      </div>
    </div>
  );
};

export default DownLoadApp;
