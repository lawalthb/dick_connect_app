import { useState } from 'react';
import UserAccessTabs from './Layout/UserAccessTabs';

import LoginUser from './LoginUser';

const UserLogin = () => {
  const [activeTab, setActiveTab] = useState('Login');
  const onTabChange = (newValue) => {
    setActiveTab(newValue);
  };
  return (
    <div className="px-32">
      <UserAccessTabs
        userAuthName="Login"
        onTabChange={onTabChange}
        activeTab={activeTab}
      />
      <div>
        <div>{activeTab === 'Login' && <LoginUser />}</div>
      </div>
    </div>
  );
};

export default UserLogin;
