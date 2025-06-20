import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ProfileCard from './Connecting/ProfileCard';
import Daniella from '@/Images/Daniella.png';

const ProfileCourasel = ({
  userConnections,
  handleOptionClick,
  userCircles,
  handleViewProfile,
}) => {
  const profiles = [
    {
      name: 'Daniella Rosell',
      profession: 'Model',
      connections: 5,
      image: Daniella.src,
    },
    {
      name: 'Chioma Okeke',
      profession: 'Singer',
      connections: 7,
      image: Daniella.src,
    },
    {
      name: 'Emmanuel Johnson',
      profession: 'Photographer',
      connections: 90,
      image: Daniella.src,
    },
  ];

  return (
    <div className="w-full max-w-[805px] mx-auto">
      <Swiper
        style={{ '--swiper-navigation-color': '#A20030' }}
        modules={[EffectFlip, Autoplay, Navigation]}
        effect="flip"
        grabCursor={true}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
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
              userConnections={userConnections}
              handleOptionClick={handleOptionClick}
              userCircles={userCircles}
              handleViewProfile={handleViewProfile}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProfileCourasel;
