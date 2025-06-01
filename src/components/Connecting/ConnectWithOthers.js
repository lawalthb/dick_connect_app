import JustConnectIcon from '@/Images/Icons/JustConnectIcon.svg';
import SportIcon from '@/Images/Icons/SportIcon.svg';
import HealthAndFitness from '@/Images/Icons/HealthAndFitness.svg';
import BusinessIcon from '@/Images/Icons/BusinessIcon.svg';
import FashionIcon from '@/Images/Icons/FashionIcon.svg';
import GamingIcon from '@/Images/Icons/GamingIcon.svg';
import Button from '../Button';

const ConnectWithOthers = () => {
  const connectOptions = [
    {
      name: 'Just Connect!',
      icon: <JustConnectIcon aria-label="Just Connet Icon" />,
    },
    {
      name: 'Sport',
      icon: <SportIcon aria-label="Sport Icon" />,
    },
    {
      name: 'Health & Fitness',
      icon: <HealthAndFitness aria-label="Health & Fitness Icon" />,
    },
    {
      name: 'Business',
      icon: <BusinessIcon aria-label="Business Icon" />,
    },
    {
      name: 'Fashion',
      icon: <FashionIcon aria-label="Fashion Icon" />,
    },
    {
      name: 'Fashion',
      icon: <GamingIcon aria-label="Gaming Icon" />,
    },
  ];
  return (
    <div>
      <h3 className="font-bold text-[40px] text-[#A20030]">Category</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-20">
        {connectOptions.map((options, index) => (
          <div
            key={index}
            className="bg-white flex flex-col gap-7 justify-center items-center mb-10 w-[380px] h-[312px]"
          >
            {options.icon}
            <h3 className="text-[#A20030] font-semibold text-[20px] leading-5">
              {options.name}
            </h3>
            <Button
              label="Explore"
              variant="outlined"
              //   color={color}
              onClick={() => handleButtonClick('login')}
              className="w-[204px] h-[45px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectWithOthers;
