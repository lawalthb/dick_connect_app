import { useState, useEffect } from 'react';
import NotificationCard from './NotificationCard';

const settingsData = [
  {
    name: 'Connection alerts',
    description: 'When you get connected to someone',
  },
  {
    name: 'Events alerts',
    description: 'When there are new events',
  },
  {
    name: 'Email alerts',
    description: 'Receive email alert',
  },
  {
    name: 'Message alert',
    description: 'Receive chat alert',
  },
  {
    name: 'System update',
    description: 'Receive system update alert',
  },
];

const Notifications = () => {
  const [toggleStates, setToggleStates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchToggleStates = async () => {
      try {
        // Replace this with actual API call
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve({
              'Connection alerts': true,
              'Events alerts': false,
              'Email alerts': true,
              'Message alert': false,
              'System update': true,
            });
          }, 500),
        );

        setToggleStates(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notification settings:', error);
      }
    };

    fetchToggleStates();
  }, []);

  const handleToggleClick = (name) => {
    setToggleStates((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));

    // Optional: Send update to backend
    // await axios.post('/api/notification-settings', { [name]: !prev[name] });
  };

  if (loading) return <p className="text-center mt-10">Loading settings...</p>;

  return (
    <div className="border border-[#A20030] w-[90%] lg:w-[60%] pt-3 pb-20 px-10 rounded-lg mx-auto mt-20">
      <div className="mt-3">
        {settingsData.map((data) => (
          <div key={data.name} className="mb-5">
            <NotificationCard
              data={data}
              enabled={toggleStates[data.name]}
              handleToggleClick={() => handleToggleClick(data.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
