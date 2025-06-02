import FilterIcon from '@/Images/Icons/FilterIcon';
import Image from 'next/image';
import Daniella from '@/Images/Daniella.png';
import MessagesIcon from '@/Images/Icons/MessagesIcon.svg';
import ConnectingXIcon from '@/Images/Icons/ConnectingXIcon.svg';
import HeartIcon from '@/Images/Icons/HeartIcon.svg';

const ConnectWithOthersDetail = () => {
  const iconOption = [
    { id: 'cancel', icon: ConnectingXIcon },
    { id: 'heart', icon: HeartIcon },
    { id: 'chat', icon: MessagesIcon },
  ];

  const handleOptionClick = (identifier) => {
    console.log(identifier);
  };
  return (
    <div className="w-[805px] flex flex-col items-center justify-center mx-auto pb-20">
      <div className="flex justify-center items-center mr-10 w-[91px] h-10 ml-auto gap-2 bg-white border border-[#C7C7C7] rounded shadow-sm hover:bg-[#A20030] hover:shadow-md group transition duration-200 ease-in-out cursor-pointer">
        <h3 className="text-[#6D7A98] group-hover:text-white font-medium text-sm leading-4">
          Filter
        </h3>
        <FilterIcon className="fill-[#6D7A98] group-hover:fill-white w-4 h-4" />
      </div>
      <div className="relative rounded-[50px] mt-10">
        <Image
          src={Daniella}
          alt="Connect App Logo"
          width={805}
          height={783}
          className="object-contain rounded-[50px]"
        />
        <div className="absolute bottom-16 w-[387px] left-52 leading-5  text-white text-center">
          <h3 className=" font-bold text-[30px]">Daniella Rosell(32)</h3>
          <p className="font-normal text-[24px] mt-4">Lagos,Nigeria</p>
          <div className="flex gap-5 mt-4 items-center justify-center">
            {iconOption.map((option, index) => {
              const IconComponent = option.icon;
              const heartIcon = index === 1;

              return (
                <div key={index} onClick={() => handleOptionClick(option.id)}>
                  <div
                    className={`
            ${heartIcon ? 'bg-[#10A260] w-[129px] h-[123px] hover:ring-white' : 'bg-white size-[100px] hover:ring-[#A20030]'} 
            rounded-full p-3
            flex items-center justify-center
            shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
            hover:scale-110 hover:ring-2  cursor-pointer
          `}
                  >
                    <IconComponent aria-label={`${option.id} Icon`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithOthersDetail;
