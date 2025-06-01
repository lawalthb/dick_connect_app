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
      icon: <JustConnectIcon aria-label="Just Connect Icon" />,
    },
    { name: 'Sport', icon: <SportIcon aria-label="Sport Icon" /> },
    {
      name: 'Health & Fitness',
      icon: <HealthAndFitness aria-label="Health & Fitness Icon" />,
    },
    { name: 'Business', icon: <BusinessIcon aria-label="Business Icon" /> },
    { name: 'Fashion', icon: <FashionIcon aria-label="Fashion Icon" /> },
    { name: 'Gaming', icon: <GamingIcon aria-label="Gaming Icon" /> },
  ];

  const handleButtonClick = (type) => {
    console.log(`Explore clicked for: ${type}`);
  };

  return (
    <div className="px-4">
      <h3 className="font-bold text-[40px] text-[#A20030]">Category</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-20 place-items-center">
        {connectOptions.map((options, index) => (
          <div
            key={index}
            className="bg-white w-full max-w-[380px] h-[312px] rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col gap-6 justify-center items-center p-6"
          >
            {options.icon}
            <h3 className="text-[#A20030] font-semibold text-lg text-center">
              {options.name}
            </h3>
            <Button
              label="Explore"
              variant="outlined"
              onClick={() => handleButtonClick(options.name)}
              className="w-[204px] h-[45px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectWithOthers;
