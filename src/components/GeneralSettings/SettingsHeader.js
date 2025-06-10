import UserAvatar from './UserAvatar';
import MedalIcon from '@/Images/Icons/MedalIcon.svg';

const SettingsHeader = () => {
  return (
    <div className="flex flex-col gap-3 mx-auto items-center">
      <UserAvatar />
      <div className="flex gap-5">
        <h3 className="text-[#5C5C5C] font-semibold text-[18px] leading-6">
          Oseni Abbey Abiodun
        </h3>
        <MedalIcon />
      </div>
    </div>
  );
};

export default SettingsHeader;
