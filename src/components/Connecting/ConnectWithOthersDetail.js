import FilterIcon from '@/Images/Icons/FilterIcon';
import Image from 'next/image';
import Daniella from '@/Images/Daniella.png';
import MessagesIcon from '@/Images/Icons/MessagesIcon.svg';
import ConnectingXIcon from '@/Images/Icons/ConnectingXIcon.svg';
import HeartIcon from '@/Images/Icons/HeartIcon.svg';
import FilterModal from '../Modal/FilterModal';
import { useState } from 'react';
import FilterButton from '../FilterButton';
import ProfileCourasel from '../ProfileCourasel';

const ConnectWithOthersDetail = () => {
  const [showFilter, setShowFilter] = useState(false);
  const iconOption = [
    { id: 'cancel', icon: ConnectingXIcon },
    { id: 'heart', icon: HeartIcon },
    { id: 'chat', icon: MessagesIcon },
  ];

  const handleOptionClick = (identifier) => {
    console.log(identifier);
  };
  const handleFilter = () => {
    setShowFilter((prev) => !prev);
  };
  return (
    <div className="max-w-[805px] flex flex-col items-center justify-center mx-auto pb-20">
      <FilterButton handleFilter={handleFilter} />
      <ProfileCourasel
        iconOption={iconOption}
        handleOptionClick={(id) => console.log('Icon clicked:', id)}
      />
      {showFilter && (
        <FilterModal showFilter={showFilter} handleFilter={handleFilter} />
      )}
    </div>
  );
};

export default ConnectWithOthersDetail;
