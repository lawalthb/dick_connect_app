import { useRouter } from 'next/router';
import Button from './Button';
import { useCallback } from 'react';

const LoginSignUpButtons = ({ extraClassName = '', color = 'primary' }) => {
  const router = useRouter();

  const handleButtonClick = useCallback(
    (identifier) => {
      switch (identifier) {
        case 'signIn':
          router.push('/login');
          break;
        case 'signUp':
          router.push('/signUp');
          break;
        default:
          console.warn('Unknown identifier:', identifier);
      }
    },
    [router],
  );
  return (
    <>
      <Button
        label="Sign In"
        variant="outlined"
        color={color}
        onClick={() => handleButtonClick('signIn')}
        className={extraClassName}
      />
      <Button
        label="Create an account"
        color={color}
        className={extraClassName}
        onClick={() => handleButtonClick('signUp')}
      />
    </>
  );
};

export default LoginSignUpButtons;
