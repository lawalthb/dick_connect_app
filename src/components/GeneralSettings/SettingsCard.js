import LockIcon from '@/Images/Icons/LockIcon.svg';

const SettingsCard = ({ data, handleSettingsClick }) => {
  return (
    <div
      onClick={() => handleSettingsClick(data.name)}
      className="w-full flex gap-5 bg-[#A2003033] p-5 rounded-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-[#A20030]/30 cursor-pointer"
    >
      <div className="size-[42.83px] bg-[#A200303B] flex items-center justify-center rounded-full ">
        <LockIcon />
      </div>
      <div className="text-[#5C5C5C]">
        <h3 className="font-semibold text-[18px] leading-6">{data.name}</h3>
        <p className="font-normal text-sm">{data.description}</p>
      </div>
    </div>
  );
};

export default SettingsCard;
