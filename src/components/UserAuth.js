import { useEffect, useState } from 'react';
import UserAccessTabs from './Layout/UserAccessTabs';

import LoginUser from './LoginUser';
import SignUpUser from './SignUpUser';
import SocialAuth from './LoginUser/SocialAuth';

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
      <div className="mx-auto w-[420px]">
        {activeTab === 'Login' && <LoginUser />}
        {activeTab === 'Sign Up' && <SignUpUser />}
        {activeTab === 'socialAccount' && <SocialAuth />}
      </div>
    </div>
  );
};

export default UserAuth;
