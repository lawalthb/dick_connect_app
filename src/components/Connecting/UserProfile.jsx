import Daniella from '@/Images/Daniella.png';
import Image from 'next/image';
import ConnectCategiries from './ConnectCategories';
import JustConnectIcon from '@/Images/Icons/JustConnectIcon.svg';
import SportIcon from '@/Images/Icons/SportIcon.svg';
import HealthAndFitness from '@/Images/Icons/HealthAndFitness.svg';
import BusinessIcon from '@/Images/Icons/BusinessIcon.svg';
import ConnectStory from './ConnectStory';
import Feeds from './Feeds';
import { useState } from 'react';
import Modal from '../Modal';
import ProfileDetail from './ProfileDetail';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const UserProfile = () => {
  const [expandImage, setExpandImage] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const connectOptions = [
    {
      name: 'Just Connect!',
      icon: <JustConnectIcon aria-label="Just Connect Icon" />,
    },
    { name: 'Sport', icon: <SportIcon aria-label="Sport Icon" /> },
    {
      name: 'Health & Fitness',
      icon: <HealthAndFitness aria-label="Health & Fitness Icon" />,
    },
    { name: 'Business', icon: <BusinessIcon aria-label="Business Icon" /> },
  ];

  const handleExpandImage = () => {
    setExpandImage((prev) => !prev);
  };

  const handleShowMore = (identifier) => {
    if (identifier === 'post') {
      console.log(identifier);
    } else if (identifier === 'delete') {
      console.log(identifier);
    }
    setShowMore((prev) => !prev);
  };

  return (
    <div>
      <Swiper
        style={{ '--swiper-pagination-color': '#A20030' }}
        modules={[EffectFlip, Autoplay, Pagination]}
        pagination={{ clickable: true }}
        effect="flip"
        grabCursor={true}
        loop={true}
        className="w-full max-w-[805px] mx-auto rounded-[30px]"
      >
        {[Daniella, Daniella, Daniella].map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={`Profile Image ${index + 1}`}
              width={805}
              height={783}
              className="object-cover w-full h-[400px] lg:h-auto rounded-[30px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ProfileDetail />
      <ConnectCategiries connectOptions={connectOptions} isProfile={true} />
      <ConnectStory extraStyle="text-[24px]" />
      <Feeds
        handleExpandImage={handleExpandImage}
        handleShowMore={handleShowMore}
        showMore={showMore}
      />
      {expandImage && (
        <Modal isOpen={expandImage} onClose={handleExpandImage} size="max-w-xl">
          {' '}
          <img
            src={Daniella.src}
            alt="Image"
            className="object-fill w-full text-black pr-1.5"
          />
        </Modal>
      )}
    </div>
  );
};

export default UserProfile;
