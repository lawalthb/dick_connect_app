import TwoFactorAuth from '@/components/LoginUser/TwoFactorAuth';

const TwoFactorAuthorization = () => {
  return (
    <div className="mx-auto min-w-[570px] mt-40">
      <TwoFactorAuth
        heading="Confirm your Email"
        subHeading="Input the code to complete the verification process"
        email="Techyabbey@gmail.com"
      />
    </div>
  );
};

export default TwoFactorAuthorization;
