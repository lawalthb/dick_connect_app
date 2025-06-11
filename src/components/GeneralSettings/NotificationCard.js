import ToggleSwitch from '../ToggleSwitch';

const NotificationCard = ({ data, handleToggleClick, enabled }) => {
  return (
    <div className="w-full flex justify-between bg-[#A2003033] p-5 rounded-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-[#A20030]/30">
      <div className="text-[#5C5C5C]">
        <h3 className="font-semibold text-[18px] leading-6">{data.name}</h3>
        <p className="font-normal text-sm">{data.description}</p>
      </div>
      <ToggleSwitch handleToggleClick={handleToggleClick} enabled={enabled} />
    </div>
  );
};

export default NotificationCard;
