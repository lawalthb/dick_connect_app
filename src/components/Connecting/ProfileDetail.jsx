import { TbWorldSearch } from 'react-icons/tb';
import { LiaUserEditSolid } from 'react-icons/lia';

const ProfileDetail = () => {
  const data = [
    {
      name: 'Post',
      input: 52,
    },
    {
      name: 'Total Likes',
      input: 48,
    },
    {
      name: 'Connected',
      input: 29,
    },
  ];

  return (
    <div className="border border-[#A20030] p-4 rounded-lg bg-white shadow-md my-10">
      <h3 className="text-[#2B2F38] font-semibold text-[36px] leading-8 text-center">
        Precious Sovan
      </h3>
      <p className="text-[#667085] text-base font-normal leading-[22px] text-center">
        @precious
      </p>
      <div className="flex justify-center gap-10 items-center mt-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center mt-4 px-4 py-2"
          >
            <h3 className="text-[#2B2F38] font-semibold text-[24px] leading-[26px]">
              {item.input}
            </h3>
            <p className="text-[#667085] text-sm font-normal leading-[22px] w-max">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-[#2B2F38] font-semibold text-[24px] leading-[26px]">
          Details
        </h3>
        <div className="flex gap-2 items-center text-[#667085] my-2">
          <TbWorldSearch className="size-5 " />
          <p className="font-normal text-sm leading-[22px]">Nigeria</p>
        </div>
        <div className="flex gap-2 items-center text-[#667085]">
          <LiaUserEditSolid className="size-5" />
          <p className="font-normal text-sm leading-[22px]">
            I Am cool and calm, I love to connect with people and share ideas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
