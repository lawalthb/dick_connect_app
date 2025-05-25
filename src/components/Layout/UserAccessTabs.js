import { useCallback } from 'react';

const UserAccessTabs = ({ userAuthName, onTabChange, activeTab }) => {
  const handleTabChange = useCallback(
    (newValue) => {
      onTabChange(newValue);
    },
    [onTabChange],
  );

  const activeColor = 'text-[#A20030] border-[#A20030]';
  const inActiveColor = 'text-[#5C5C5C] border-[#5C5C5C]';

  const loginTabBorderColor =
    activeTab === userAuthName ? activeColor : inActiveColor;

  const socialTabBorderColor =
    activeTab === 'socialAccount' ? activeColor : inActiveColor;

  return (
    <div className="flex w-full py-16">
      <h3
        onClick={() => handleTabChange(userAuthName)}
        className={`${loginTabBorderColor} w-1/2 font-semibold text-center text-base cursor-pointer border-b hover:border-[#A20030] hover:text-[#A20030] transition-colors`}
      >{`${userAuthName} with your email`}</h3>
      <h3
        onClick={() => handleTabChange('socialAccount')}
        className={`${socialTabBorderColor} w-1/2 font-semibold text-center text-base cursor-pointer border-b hover:border-[#A20030] hover:text-[#A20030] transition-colors`}
      >{`${userAuthName} with your social account`}</h3>
    </div>
  );
};

export default UserAccessTabs;
