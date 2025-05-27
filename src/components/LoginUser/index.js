import Button from '../Button';
import InputField from '../Input/InputField';
import { useForm, FormProvider } from 'react-hook-form';
import AuthHeader from './AuthHeader';
import { useCallback, useState } from 'react';
import ConnectAppIcon from '@/Images/Icons/ConnectAppIcon.svg';
import { useRouter } from 'next/router';

const LoginUser = () => {
  const router = useRouter();
  const [isAuthType, setIsAuthType] = useState({
    login: true,
    password: false,
  });
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handlePassword = useCallback((identifier) => {
    switch (identifier) {
      case 'showPassword':
        setIsAuthType({
          login: false,
          password: true,
        });
        break;
      case 'back':
        setIsAuthType({
          login: true,
          password: false,
        });
        break;
      default:
        console.warn('Unknown identifier:', identifier);
    }
  }, []);

  const handleCreateAccount = useCallback(() => {
    router.push('/signup');
  }, [router]);
  return (
    <>
      <div className="flex justify-center">
        <ConnectAppIcon aria-label="Connect App Logo" />
      </div>
      <div className="flex flex-col mx-auto w-[420px] my-20">
        <AuthHeader
          label={isAuthType.password ? 'Forgot Password' : 'Login'}
          description={
            isAuthType.password
              ? 'Enter your email address to rest password'
              : 'Enter your details to login to your CONNECT APP account'
          }
        />
        <FormProvider {...methods}>
          {isAuthType.login && (
            <>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div>
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
                </div>
                <p
                  onClick={() => handlePassword('showPassword')}
                  className="text-base font-semibold leading-6 text-[#A20030] cursor-pointer w-max mb-5"
                >
                  Forgot Password?
                </p>
                <Button label="Login" type="submit" btnclass="w-full" />
                <div className="flex items-center justify-center gap-2 mt-5">
                  <span className="text-base text-[#5C5C5C] font-normal leading-6">
                    Don’t have an account?
                  </span>
                  <span
                    onClick={handleCreateAccount}
                    className="text-[#A20030] font-semibold text-base leading-6 cursor-pointer"
                  >
                    Create Account
                  </span>
                </div>
              </form>
            </>
          )}
          {isAuthType.password && (
            <>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div>
                  <InputField
                    label={'Email Address'}
                    type="email"
                    name={'email'}
                  />
                </div>
                <Button label="Proceed" type="submit" btnclass="w-full" />
                <div className="flex items-center justify-center gap-2 mt-5">
                  <p
                    onClick={() => handlePassword('back')}
                    className="text-base font-semibold leading-6 underline text-[#A20030] cursor-pointer w-max mt-5"
                  >
                    Back to login
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

export default LoginUser;
