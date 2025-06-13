import { IoIosArrowBack } from 'react-icons/io';

const BackToPreviousScreen = ({ onBackClick }) => {
  return (
    <div
      onClick={onBackClick}
      className="flex items-center gap-4 w-20 cursor-pointer text-[#A20030]"
    >
      <IoIosArrowBack className="text-[#A20030]" />
      Back
    </div>
  );
};

export default BackToPreviousScreen;
