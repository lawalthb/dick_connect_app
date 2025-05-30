const AuthFooter = ({ handleLogIn }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-2 mt-5">
        <span className="text-base text-[#5C5C5C] font-normal leading-6">
          Already have an account?
        </span>
        <span
          onClick={handleLogIn}
          className="text-[#A20030] font-semibold text-base leading-6 cursor-pointer"
        >
          Log In
        </span>
      </div>
      <p className="w-[75%] text-sm text-[#6D7A98] font-normal mx-auto text-center mt-5">
        By creating an account, you have agreed to our{' '}
        <span className="text-[#A20030] cursor-pointer">Terms</span> and{' '}
        <span className="text-[#A20030] cursor-pointer">conditions</span>
      </p>
    </>
  );
};

export default AuthFooter;
