import { useCallback, useState } from 'react';
import MainSettings from './MainSettings';
import Notifications from './Notifications';
import ProfileSettings from './ProfileSettings';
import BackToPreviousScreen from '../BackToPreviousScreen';
import ChangePassword from './ChangePassword';
import ChangeCountry from './ChangeCountry';
import AddExternalLinks from './AddExternalLinks';
import ConfirmationModal from './ConfirmationModal';
import LogoutIcon from '@/Images/Icons/LogoutIcon.svg';
import Subscription from './Subscription';

const GeneralSettings = () => {
  const [activeSettings, setActiveSettings] = useState({});

  const handleSettingsClick = (identifier) => {
    const newSettings = Object.fromEntries(
      Object.keys(activeSettings).map((key) => [key, false]),
    );

    const normalizedKey = identifier.replace(/\s+/g, '').toLowerCase();

    setActiveSettings({
      ...newSettings,
      [normalizedKey]: true,
    });

    console.log('Active:', {
      ...newSettings,
      [normalizedKey]: true,
    });
  };

  const allInactive = Object.values(activeSettings).every((value) => !value);

  const handleBackToHomePage = useCallback(() => {
    setActiveSettings({});
  }, []);

  const onSubmitNewPassword = (data) => {
    console.log(data);
  };
  const onSubmitNewCountry = (data) => {
    console.log(data);
  };
  const onSubmitExternalLinks = (data) => {
    console.log(data);
  };
  const handleLogout = () => {
    console.log('Logout');
  };
  const handleDelete = () => {
    console.log('Delete');
  };

  return (
    <div className="mt-16 pb-60">
      {!allInactive && (
        <div className="mx-40">
          <BackToPreviousScreen onBackClick={handleBackToHomePage} />
        </div>
      )}
      {allInactive && (
        <MainSettings handleSettingsClick={handleSettingsClick} />
      )}
      {activeSettings.notification && <Notifications />}
      {activeSettings.accountsetting && <ProfileSettings />}
      {activeSettings.subscription && <Subscription />}

      <ChangePassword
        activeSettings={activeSettings}
        handleBackToHomePage={handleBackToHomePage}
        onSubmitNewPassword={onSubmitNewPassword}
      />
      <ChangeCountry
        activeSettings={activeSettings}
        handleBackToHomePage={handleBackToHomePage}
        onSubmitNewCountry={onSubmitNewCountry}
      />
      <AddExternalLinks
        activeSettings={activeSettings}
        handleBackToHomePage={handleBackToHomePage}
        onSubmitNewCountry={onSubmitExternalLinks}
      />
      <ConfirmationModal
        activeSettings={activeSettings.logout}
        handleBackToHomePage={handleBackToHomePage}
        title={'Logout'}
        description={'Are you sure you want to logout'}
        handleConfirm={handleLogout}
        confrimLabel={'Logout'}
        icon={() => <LogoutIcon />}
      />
      <ConfirmationModal
        activeSettings={activeSettings.deleteaccount}
        handleBackToHomePage={handleBackToHomePage}
        title={'Delete Account'}
        description={'Are you sure you want to delete your account'}
        handleConfirm={handleDelete}
        confrimLabel={'Delete'}
        icon={() => <LogoutIcon />}
      />
    </div>
  );
};

export default GeneralSettings;
