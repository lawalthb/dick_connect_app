import { MdSort } from 'react-icons/md';
import CommentAvatarIcon from '@/Images/Icons/CommentAvatarIcon.svg';
import LoveIcon from '@/Images/Icons/LoveIcon.svg';
import Daniella from '@/Images/Daniella.png';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { FaSortDown } from 'react-icons/fa';

const Comments = () => {
  const commentData = [
    {
      userName: '@josephedwards8397',
      comment:
        'You know what else needs an award? Those production sets of yours, cause those backgrounds keep getting cooler and cooler! Awesome upload Marques! Look forward to seeing what you have got in 2023!',
      likes: '45k',
      replies: 87,
      date: '2 months ago',
      url: Daniella,
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-5 text-[#0F0F0F]">
        <h3 className="font-normal text-base">11,000 Comments</h3>
        <div className="flex items-center">
          <MdSort className="w-6 h-4" />
          <p className="font-medium text-sm">Sort by</p>
        </div>
      </div>
      <div className="flex gap-3 mt-5">
        <CommentAvatarIcon className="rounded-full" />
        <input
          type="text"
          className="font-normal text-sm w-full border-b border-[#0000001A] text-[#606060] h-[25px] pl-2"
          placeholder=" Add a comment..."
        />
      </div>
      <div className="mt-7">
        {commentData.map((data, index) => (
          <div key={index} className="flex gap-4">
            <img
              src={data.url.src}
              alt={data.userName}
              className="size-10 object-cover rounded-full"
            />
            <div className="-mt-1">
              <span className="text-[#0F0F0F] font-medium text-[13px]">
                {data.userName}
              </span>
              <span className="text-[#606060] font-normal text-xs ml-1">
                {data.date}
              </span>
              <p className="text-[#0F0F0F] font-normal text-sm w-full">
                {data.comment}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <AiOutlineLike className="text-[#0F0F0F] w-[18px] h-[17px] cursor-pointer" />
                <p className="text-[#606060] font-normal text-xs">
                  {data.likes}
                </p>
                <BiDislike className="text-[#0F0F0F] w-[18px] h-[17px] cursor-pointer" />
                <div className="relative w-fit">
                  <img
                    src={data.url.src}
                    alt={data.userName}
                    className="size-[14px] object-cover rounded-full"
                  />
                  <LoveIcon className="absolute top-1 left-2 translate-x-[-25%] translate-y-[25%]" />
                </div>
                <p className="font-medium text-xs text-[#0F0F0F] cursor-pointer ml-2">
                  Reply
                </p>
              </div>
              <div className="flex items-center mt-2 gap-2 text-[#065FD4] cursor-pointer">
                <FaSortDown className="-mt-2" />
                <p className="font-medium text-sm">{`${data.replies} replies`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
