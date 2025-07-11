import Image from 'next/image';
import NigerieFlag from '@/Images/NigerieFlag.png';
import Button from '../Button';
import { useState } from 'react';

const ProfileCard = ({
  profile,
  userConnections,
  handleOptionClick,
  userCircles,
  handleViewProfile,
}) => {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    console.log('Image clicked');
    setIsImageClicked((prev) => !prev);
  };
  return (
    <div
      onClick={handleImageClick}
      className="rounded-[30px] mt-10 w-full mx-auto px-2 sm:px-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="relative w-full rounded-[30px] overflow-hidden">
        <Image
          src={profile.image}
          alt={profile.name}
          width={805}
          height={783}
          className="object-cover w-full h-[600px] md:h-[1000px] rounded-[30px]"
        />

        {!isImageClicked && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

            <div className="absolute inset-0 z-20 flex flex-col justify-end px-4 sm:px-10 pb-10 text-white">
              <div className="max-w-[387px]">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-[24px] md:text-[30px]">
                    {profile.name}
                  </h3>
                  <Image
                    src={NigerieFlag}
                    alt="Country"
                    width={20}
                    height={10}
                  />
                </div>
                <p className="font-normal text-[20px] md:text-[24px] mt-1">
                  {profile.profession}
                </p>
                <p className="font-bold text-[16px] md:text-[20px] mt-1">
                  {`Connected: ${profile.connections}`}
                </p>

                <div className="flex gap-2 sm:gap-4 mb-8 lg:mb-4 mt-4 items-center justify-start flex-wrap">
                  {userConnections.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleOptionClick(option.id)}
                      className="max-h-[40px] lg:max-h-[60px]"
                    >
                      <Image
                        src={option.image}
                        alt="User"
                        width={60}
                        height={60}
                        className="cursor-pointer rounded-full object-cover aspect-square"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 items-center justify-start">
                  {userCircles.map((option, index) => (
                    <div
                      key={index}
                      className="bg-[#A20030] text-white rounded-[50px] px-4 sm:px-5 py-1.5 sm:py-2 shadow-md text-sm sm:text-base leading-6 font-medium whitespace-nowrap"
                    >
                      {`#${option.circle}`}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex gap-x-4 max-w-[650px]">
                <Button
                  label="Show Circle"
                  variant="outlined"
                  btnclass="w-full h-10 bg-white whitespace-nowrap sm:px-16"
                  btnstyle="rounded"
                />
                <Button
                  label="View Profile"
                  onClick={handleViewProfile}
                  btnclass="w-full h-10 whitespace-nowrap sm:px-16"
                  btnstyle="rounded"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
