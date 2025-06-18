import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ProfileCard from './Connecting/ProfileCard';
import Daniella from '@/Images/Daniella.png';

const ProfileCourasel = ({ iconOption, handleOptionClick }) => {
  const profiles = [
    {
      name: 'Daniella Rosell',
      age: 32,
      location: 'Lagos, Nigeria',
      image: Daniella.src,
    },
    {
      name: 'Chioma Okeke',
      age: 28,
      location: 'Abuja, Nigeria',
      image: Daniella.src,
    },
    {
      name: 'Emmanuel Johnson',
      age: 30,
      location: 'Port Harcourt, Nigeria',
      image: Daniella.src,
    },
  ];

  return (
    <div className="w-full px-4 max-w-[805px] mx-auto">
      <Swiper
        modules={[EffectFlip, Autoplay, Navigation]}
        effect="flip"
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="rounded-[30px]"
      >
        {profiles.map((profile, index) => (
          <SwiperSlide
            key={index}
            className="w-full max-w-[805px] flex justify-center"
          >
            <ProfileCard
              profile={profile}
              iconOption={iconOption}
              handleOptionClick={handleOptionClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProfileCourasel;
