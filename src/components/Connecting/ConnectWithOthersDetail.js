import Daniella from '@/Images/Daniella.png';
import FilterModal from '../Modal/FilterModal';
import { useState } from 'react';
import FilterButton from '../FilterButton';
import ProfileCourasel from '../ProfileCourasel';
import Button from '../Button';
import { useRouter } from 'next/router';
import UserProfile from './UserProfile';
import BackToPreviousScreen from '../BackToPreviousScreen';
import { FormProvider, useForm } from 'react-hook-form';
import InputField from '../Input/InputField';

const ConnectWithOthersDetail = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [profile, setProfile] = useState(false);

  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const router = useRouter();
  const userConnections = [
    { id: 1, image: Daniella },
    { id: 2, image: Daniella },
    { id: 3, image: Daniella },
    { id: 4, image: Daniella },
    { id: 5, image: Daniella },
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
            <FilterModal showFilter={showFilter} handleFilter={handleFilter}>
              <FormProvider {...methods}>
                <form
                  onSubmit={methods.handleSubmit(onSubmit)}
                  className="space-y-4 my-5"
                >
                  <InputField
                    label={'Age'}
                    type="text"
                    name={'age'}
                    required={false}
                  />
                  <InputField
                    label={'Language'}
                    type="text"
                    name={'language'}
                    required={false}
                  />
                  <InputField
                    label={'Interest'}
                    type="text"
                    name={'interest'}
                    required={false}
                  />
                  <Button
                    type="submit"
                    label="Apply Filter"
                    className="w-full h-14"
                  />
                </form>
              </FormProvider>
            </FilterModal>
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
