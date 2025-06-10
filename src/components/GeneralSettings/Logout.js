import { BiLogOutCircle } from 'react-icons/bi';

const Logout = () => {
  return (
    <div className="cursor-pointer w-[130px] flex items-center gap-5 group transition-all duration-300 ease-in-out">
      <div className="size-[42.83px] bg-[#FBEAE9] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#f2d2cf]">
        <BiLogOutCircle className="text-black text-xl transition-colors duration-300 group-hover:text-[#D42620]" />
      </div>
      <p className="text-[#D42620] font-semibold text-[18px] leading-6 transition-opacity duration-300 group-hover:opacity-80">
        Logout
      </p>
    </div>
  );
};

export default Logout;
