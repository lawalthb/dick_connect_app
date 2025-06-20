import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ConnectStory from './ConnectStory';
import FilterButton from '../FilterButton';
import Daniella from '@/Images/Daniella.png';
import WorldIcon from '@/Images/Icons/WorldIcon.svg';
import ExpandImageIcon from '@/Images/Icons/ExpandImageIcon.svg';
import { PiDotsThreeOutlineVertical } from 'react-icons/pi';
import Modal from '../Modal';
import Image from 'next/image';
import SearchField from '../Input/SearchField';
import Feeds from './Feeds';

const ConnectionFeed = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [expandImage, setExpandImage] = useState(false);

  const handleShowMore = (identifier) => {
    if (identifier === 'post') {
      console.log(identifier);
    } else if (identifier === 'delete') {
      console.log(identifier);
    }
    setShowMore((prev) => !prev);
  };

  const handleFilter = () => {
    setShowFilter((prev) => !prev);
  };
  const handleExpandImage = () => {
    setExpandImage((prev) => !prev);
  };
  return (
    <div className="md:px-20 w-full mb-20">
      <>
        <div className="flex items-center justify-center gap-3">
          <div className="w-[384px]">
            <SearchField />
          </div>
          <div className="w-[91px]">
            <FilterButton handleFilter={handleFilter} />
          </div>
        </div>
        <div className="w-full lg:w-[562px] mx-auto my-20">
          <ConnectStory />
          <Feeds
            handleExpandImage={handleExpandImage}
            handleShowMore={handleShowMore}
            showMore={showMore}
          />
        </div>
      </>

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

export default ConnectionFeed;
