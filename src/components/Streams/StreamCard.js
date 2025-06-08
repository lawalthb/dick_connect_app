import LivestreamIcon from '@/Images/Icons/LivestreamIcon';

const StreamCard = ({ option, handleViewMore }) => {
  return (
    <div className="bg-[#E6BAC7] rounded-3xl w-[553px] p-10 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#A20030]/30">
      <div className="flex items-center justify-center bg-[#A20030] size-20 rounded-full">
        <LivestreamIcon />
      </div>
      <h3 className="text-[#A20030] font-bold text-[32px] leading-8 my-5">
        {option.title}
      </h3>
      <p className="font-normal text-[16px] leading-6 text-[#0C0C0C96]">
        {option.description}
      </p>
      <p
        onClick={() => handleViewMore(option.id)}
        className="font-normal text-[16px] leading-6 text-[#A20030] mt-8 cursor-pointer"
      >
        {option.link}
      </p>
    </div>
  );
};

export default StreamCard;
