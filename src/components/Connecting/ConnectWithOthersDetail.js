import Daniella from '@/Images/Daniella.png';
import FilterModal from '../Modal/FilterModal';
import { useState } from 'react';
import FilterButton from '../FilterButton';
import ProfileCourasel from '../ProfileCourasel';
import Button from '../Button';
import { useRouter } from 'next/router';
import UserProfile from './UserProfile';
import BackToPreviousScreen from '../BackToPreviousScreen';

const ConnectWithOthersDetail = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [profile, setProfile] = useState(false);

  const router = useRouter();
  const userConnections = [
    { id: 'cancel', image: Daniella },
    { id: 'heart', image: Daniella },
    { id: 'chat', image: Daniella },
  ];
  const userCircles = [
    { id: 1, circle: 'Music' },
    { id: 2, circle: 'Sport' },
    { id: 3, circle: 'Business' },
  ];

  const handleOptionClick = (identifier) => {
    console.log(identifier);
  };
  const handleFilter = () => {
    setShowFilter((prev) => !prev);
  };
  const handleViewProfile = () => {
    setProfile((prev) => !prev);
  };
  return (
    <div className="max-w-[805px] mx-auto pb-20">
      {!profile && (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-x-5 w-full max-w-[710px] items-center justify-center mb-6">
            <Button
              label="Livestream"
              variant="outlined"
              btnclass="w-full lg:w-auto h-10 whitespace-nowrap px-6 lg:px-16"
              btnstyle="rounded"
              onClick={() => router.push('/livestream')}
            />
            <Button
              label="Subscription"
              btnclass="w-full lg:w-auto h-10 whitespace-nowrap px-6 lg:px-16"
              btnstyle="rounded"
              onClick={() => router.push('/settings?active=subscription')}
            />
            <div className="w-full lg:w-auto">
              <FilterButton handleFilter={handleFilter} />
            </div>
          </div>

          <ProfileCourasel
            userConnections={userConnections}
            userCircles={userCircles}
            handleOptionClick={handleOptionClick}
            handleViewProfile={handleViewProfile}
          />

          {showFilter && (
            <FilterModal showFilter={showFilter} handleFilter={handleFilter} />
          )}
        </div>
      )}
      {profile && (
        <div className="mb-10">
          <BackToPreviousScreen onBackClick={handleViewProfile} />
        </div>
      )}
      {profile && <UserProfile />}
    </div>
  );
};

export default ConnectWithOthersDetail;
