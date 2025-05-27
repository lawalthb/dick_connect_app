import { useEffect, useState } from 'react';
import UserAccessTabs from './Layout/UserAccessTabs';

import LoginUser from './LoginUser';
import SignUpUser from './SignUpUser';

const UserAuth = ({ authType = 'Login' }) => {
  const [activeTab, setActiveTab] = useState(authType);

  const onTabChange = (newValue) => {
    setActiveTab(newValue);
  };
  return (
    <div className="px-32">
      <UserAccessTabs
        userAuthName={authType}
        onTabChange={onTabChange}
        activeTab={activeTab}
      />
      {activeTab === 'Login' && <LoginUser />}
      {activeTab === 'Sign Up' && <SignUpUser />}
    </div>
  );
};

export default UserAuth;
