import { useRouter } from 'next/router';
import Button from './Button';
import { useCallback } from 'react';

const LoginSignUpButtons = ({ extraClassName = '', color = 'primary' }) => {
  const router = useRouter();

  const handleButtonClick = useCallback(
    (identifier) => {
      router.push(`/${identifier}`);
    },
    [router],
  );
  return (
    <>
      <Button
        label="Sign In"
        variant="outlined"
        color={color}
        onClick={() => handleButtonClick('login')}
        className={extraClassName}
      />
      <Button
        label="Create an account"
        color={color}
        className={extraClassName}
        onClick={() => handleButtonClick('signup')}
      />
    </>
  );
};

export default LoginSignUpButtons;
