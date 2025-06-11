import { useState } from 'react';
import MainSettings from './MainSettings';
import Notifications from './Notifications';

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

  return (
    <div className="mt-16 pb-60">
      {allInactive && (
        <MainSettings handleSettingsClick={handleSettingsClick} />
      )}
      {activeSettings.notification && <Notifications />}
    </div>
  );
};

export default GeneralSettings;
