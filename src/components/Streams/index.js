import { useState } from 'react';
import StreamCard from './StreamCard';
import UpcomingLiveStreamCard from './UpcomingLiveStreamCard';
import VideoPlayer from '../VideoPlayer';
import Daniella from '@/Images/Daniella.png';
import ConfirmIcon from '@/Images/Icons/ConfirmIcon.svg';
import Button from '../Button';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import Comments from '../Comments';

const Stream = () => {
  const [upcomingStream, setUpcomingStream] = useState(false);
  const [availableStream, setAvailableStream] = useState(false);
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
    setAvailableStream(true);
  };
  return (
    <>
      {!upcomingStream && !availableStream && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {streamData.map((option) => (
            <div key={option.id}>
              <StreamCard option={option} handleViewMore={handleViewMore} />
            </div>
          ))}
        </div>
      )}
      {upcomingStream && !availableStream && (
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
      {availableStream && (
        <div className="flex flex-col mx-auto w-full lg:w-[966px] justify-center -mt-20">
          <h2 className="text-[#0B0D0E] text-center font-bold text-[48px] leading-16">
            Available Live Stream
          </h2>
          <div className="w-full h-full mt-14">
            <VideoPlayer src={'https://www.youtube.com/embed/qobh9QeMbl8'} />
          </div>
          <div>
            <h3 className="text-[#0F0F0F] font-semibold text-[18px] leading-7 mt-24">
              Solemization of the holy matrimony
            </h3>
            <div className="flex justify-between items-center">
              <div className="mt-3 flex gap-3">
                <img
                  src={Daniella.src}
                  alt="Image"
                  className="object-fill size-10 text-black rounded-full"
                />
                <h3 className="text-[#0F0F0F] text-base leading-[22px] font-medium">
                  John Maxwell
                </h3>
                <ConfirmIcon />
                <div className="flex gap-3 ml-5">
                  <Button
                    label="Joined"
                    variant="outlined"
                    btnstyle={'rounded'}
                  />
                  <Button label="Leave" btnstyle={'rounded'} />
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#0000000D] rounded-tl-[18px] rounded-bl-[18px] p-2 w-[88.7px] flex items-center gap-3">
                  <AiOutlineLike className="text-[#0F0F0F] w-[18px] h-[17px] cursor-pointer" />
                  <p className="text-[#0F0F0F] text-[14px] font-medium">205k</p>
                </div>
                <div className="bg-[#0000000D] border-l-2 border-[#0000001A] rounded-tr-[18px] rounded-br-[18px] p-2.5 w-[52px]">
                  <BiDislike className="text-[#0F0F0F] w-[18px] h-[17px] cursor-pointer" />
                </div>
                <div className="cursor-pointer bg-[#0000000D] border-l-2 border-[#0000001A] rounded-[18px] p-2 flex items-center gap-3 ml-2">
                  <RiShareForwardLine className="text-[#0F0F0F] w-[18px] h-[17px]" />
                  <p className="text-[#0F0F0F] text-[14px] font-medium">
                    Share
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#0000000D] border-[#0000001A] rounded-[12px] p-2 mt-3">
              <p className="text-[#0F0F0F] text-[14px] font-medium">
                100 viewers online
              </p>
            </div>
          </div>
          <div className="mt-14">
            <Comments />
          </div>
        </div>
      )}
    </>
  );
};

export default Stream;
