import AuthenticatedNavBar from '@/components/AuthenticatedNavBar';
import ConnectWithOthers from '@/components/Connecting/ConnectWithOthers';
import TabSelector from '@/components/Layout/TabSelector';
import { useState } from 'react';

const Connecting = () => {
  const [activeTab, setActiveTab] = useState('Connect with others');

  const onTabChange = (newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <AuthenticatedNavBar />
      <div className="px-28">
        <TabSelector
          firstTabName={'Connect with others'}
          secondTabName={'Connecting Feed'}
          onTabChange={onTabChange}
          activeTab={activeTab}
        />
      </div>
      <div className="px-20">
        {activeTab === 'Connect with others' && <ConnectWithOthers />}
      </div>
    </div>
  );
};

export default Connecting;
