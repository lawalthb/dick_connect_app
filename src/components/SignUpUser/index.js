import Button from '../Button';
import InputField from '../Input/InputField';
import { useForm, FormProvider } from 'react-hook-form';
import { useCallback, useState } from 'react';
import ConnectAppIcon from '@/Images/Icons/ConnectAppIcon.svg';
import { useRouter } from 'next/router';
import AuthHeader from '../LoginUser/AuthHeader';
import SelectField from '../Input/SelectField';

const SignUpUser = () => {
  const router = useRouter();
  const [isAuthType, setIsAuthType] = useState({
    firstStep: true,
    secondStep: false,
  });
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSignUpSTeps = useCallback((identifier) => {
    switch (identifier) {
      case 'next':
        setIsAuthType({
          firstStep: false,
          secondStep: true,
        });
        break;
      case 'back':
        setIsAuthType({
          firstStep: true,
          secondStep: false,
        });
        break;
      default:
        console.warn('Unknown identifier:', identifier);
    }
  }, []);

  const handleLogIn = useCallback(() => {
    router.push('/login');
  }, [router]);
  return (
    <>
      <div className="flex justify-center">
        <ConnectAppIcon aria-label="Connect App Logo" />
      </div>
      <div className="flex flex-col mx-auto w-[420px] my-20">
        <AuthHeader
          label={'Create Account'}
          description={'Enter your details to create your CONNECT APP account'}
        />
        <FormProvider {...methods}>
          {isAuthType.firstStep && (
            <>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div>
                  <InputField
                    label={'First Name'}
                    type="text"
                    name={'first_name'}
                  />
                  <InputField
                    label={'Last Name'}
                    type="text"
                    name={'last_name'}
                  />
                  <InputField
                    label={'Email Address'}
                    type="email"
                    name={'email'}
                  />
                  <InputField
                    label={'Password'}
                    type="password"
                    name={'password'}
                  />
                  <SelectField label="Gender" name="gender" defaultValue="">
                    {['Male', 'Female'].map((gender) => (
                      <option key={gender} value={gender}>
                        {gender}
                      </option>
                    ))}
                  </SelectField>
                </div>
                <Button
                  label="Next"
                  type="button"
                  btnclass="w-full"
                  onClick={() => handleSignUpSTeps('next')}
                />
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
                  <span className="text-[#A20030] cursor-pointer">Terms</span>{' '}
                  and{' '}
                  <span className="text-[#A20030] cursor-pointer">
                    conditions
                  </span>
                </p>
              </form>
            </>
          )}
          {isAuthType.secondStep && (
            <>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <SelectField
                  label="Location"
                  name="location"
                  defaultValue=""
                  type="country"
                />
                <SelectField label="Language" name="language" defaultValue="">
                  {['English', 'French'].map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </SelectField>
                <Button
                  label="Create Account"
                  type="submit"
                  btnclass="w-full"
                />
                <div className="flex items-center justify-center gap-2 mt-5">
                  <p
                    onClick={() => handleSignUpSTeps('back')}
                    className="text-base font-semibold leading-6 underline text-[#A20030] cursor-pointer w-max mt-5"
                  >
                    Back
                  </p>
                </div>
              </form>
            </>
          )}
        </FormProvider>
      </div>
    </>
  );
};

export default SignUpUser;
