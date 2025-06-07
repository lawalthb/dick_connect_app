import { useState } from 'react';
import StreamCard from './StreamCard';
import UpcomingLiveStreamCard from './UpcomingLiveStreamCard';

const Stream = () => {
  const [upcomingStream, setUpcomingStream] = useState(false);
  const streamData = [
    {
      id: 1,
      title: 'Watch Livestream',
      description:
        'Work efficiently with teammates and clients, stay in sync on projects and keep company data safe.',
      link: 'See all livestream',
    },
    {
      id: 2,
      title: 'Upcoming Livestream',
      description:
        'Work efficiently with teammates and clients, stay in sync on projects and keep company data safe.',
      link: 'See all',
    },
  ];

  const upcomingStreamData = [
    {
      id: 1,
      title: 'Solemnization of Holy Matrimony',
      description:
        'Work efficiently with teammates and clients, stay in sync on projects and keep company data safe.',
      url: '',
    },
    {
      id: 2,
      title: 'Happy Hour Hangout',
      description:
        'Work efficiently with teammates and clients, stay in sync on projects and keep company data safe.',
      url: '',
    },
  ];

  const handleUpcomingStream = () => {
    setUpcomingStream((prev) => !prev);
  };
  const handleViewMore = (id) => {
    if (id === 1) {
      console.log(id);
    } else if (id === 2) {
      handleUpcomingStream();
    }
  };
  const handleJoinStream = (id) => {
    if (id === 1) {
      console.log(id);
    } else if (id === 2) {
      console.log(id);
    }
  };
  return (
    <>
      {!upcomingStream && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {streamData.map((option) => (
            <div key={option.id}>
              <StreamCard option={option} handleViewMore={handleViewMore} />
            </div>
          ))}
        </div>
      )}
      {upcomingStream && (
        <div className="flex flex-col -mt-20 w-full">
          <h3 className="text-[#A20030] font-bold text-[40px] leading-16 text-center mb-24">
            Upcoming Live Stream
          </h3>
          <>
            {upcomingStreamData.map((option) => (
              <div key={option.id}>
                <UpcomingLiveStreamCard
                  option={option}
                  handleJoinStream={handleJoinStream}
                />
              </div>
            ))}
          </>
        </div>
      )}
    </>
  );
};

export default Stream;
