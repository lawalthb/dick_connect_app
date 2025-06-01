import UserAuth from '@/components/UserAuth';
import Image from 'next/image';
// import { Geist, Geist_Mono } from 'next/font/google';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

const SignUp = () => {
  return (
    <div>
      <main>
        <UserAuth
          firstTabName="Sign Up with your email"
          secondTabName="Sign Up with your social account"
        />
      </main>
    </div>
  );
};

export default SignUp;
