import Ellipse140 from '@/Images/Ellipse140.png';
import Image from 'next/image';

const PhoneWithBackground = ({ src }) => {
  return (
    <div className="relative w-full h-full">
      <Image src={Ellipse140} alt="Phone" className="" />
      <div className="absolute top-[-60px] left-[100px] max-w-[320px] max-h-[645px] flex justify-center items-center">
        <Image src={src} alt="Phone" className="" />
      </div>
    </div>
  );
};

export default PhoneWithBackground;
