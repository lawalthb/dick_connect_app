import GeneralSettings from '@/components/GeneralSettings';
import AuthenticatedNavBar from '@/components/Layout/AuthenticatedNavBar';

const Settings = () => {
  return (
    <div>
      <AuthenticatedNavBar />
      <GeneralSettings />
    </div>
  );
};

export default Settings;
