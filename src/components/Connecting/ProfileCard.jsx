import Image from 'next/image';

const ProfileCard = ({ profile, iconOption, handleOptionClick }) => {
  return (
    <div className="relative rounded-[30px] mt-10 w-full mx-auto px-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="w-full rounded-[30px] overflow-hidden">
        <Image
          src={profile.image}
          alt={profile.name}
          width={805}
          height={783}
          className="object-cover w-full h-auto rounded-[30px]"
        />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] sm:w-[387px] text-white text-center leading-5">
        <h3 className="font-bold text-[20px] sm:text-[24px] md:text-[30px]">
          {profile.name} ({profile.age})
        </h3>
        <p className="font-normal text-[16px] sm:text-[20px] md:text-[24px] mt-2 sm:mt-4">
          {profile.location}
        </p>

        <div className="flex gap-4 mt-4 items-center justify-center flex-wrap">
          {iconOption.map((option, index) => {
            const IconComponent = option.icon;
            const heartIcon = index === 1;

            return (
              <div key={index} onClick={() => handleOptionClick(option.id)}>
                <div
                  className={`${
                    heartIcon
                      ? 'bg-[#10A260] w-[100px] h-[100px] sm:w-[129px] sm:h-[123px] hover:ring-white'
                      : 'bg-white w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] hover:ring-[#A20030]'
                  } 
                  rounded-full p-3
                  flex items-center justify-center
                  shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
                  hover:scale-110 hover:ring-2 cursor-pointer`}
                >
                  <IconComponent aria-label={`${option.id} Icon`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
