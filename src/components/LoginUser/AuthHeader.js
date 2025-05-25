const AuthHeader = ({ label, description }) => {
  return (
    <>
      <h3 className="font-semibold text-[28px] leading-8 text-[#5C5C5C] mb-2">
        {label}
      </h3>
      <p className="text-[#5C5C5C] font-normal text-4 leading-[24px] mb-8">
        {description}
      </p>
    </>
  );
};

export default AuthHeader;
