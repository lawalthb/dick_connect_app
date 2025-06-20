import Image from 'next/image';
import NigerieFlag from '@/Images/NigerieFlag.png';
import Button from '../Button';

const ProfileCard = ({
  profile,
  userConnections,
  handleOptionClick,
  userCircles,
  handleViewProfile,
}) => {
  return (
    <div className=" rounded-[30px] mt-10 w-full mx-auto px-2 sm:px-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="relative w-full rounded-[30px] overflow-hidden">
        <Image
          src={profile.image}
          alt={profile.name}
          width={805}
          height={783}
          className="object-cover w-full h-[600px] lg:h-auto rounded-[30px]"
        />
        <div className=" absolute bottom-20 left-52 sm:left-60 -translate-x-1/2 w-[387px] text-white leading-5">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-[24px] lg:text-[30px]">
              {profile.name}
            </h3>
            <Image src={NigerieFlag} alt="Country" width={20} height={10} />
          </div>
          <p className="font-normal text-[20px] md:text-[24px] mt-2 lg:mt-4">
            {profile.profession}
          </p>
          <p className="font-bold text-[16px] md:text-[20px] mt-3 lg:mt-7">
            {`Connected: ${profile.connections}`}
          </p>

          <div className="flex gap-2 sm:gap-4 mb-8 mt-4 items-center justify-start flex-wrap">
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
          <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 items-center justify-start">
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
        <div className="absolute bottom-5 left-1 sm:left-10 flex gap-x-5 max-w-[650px] items-center justify-center">
          <Button
            label="Show Circle"
            variant="outlined"
            // onClick={handleBackToPerformance}
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
    </div>
  );
};

export default ProfileCard;
