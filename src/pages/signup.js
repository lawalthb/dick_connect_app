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
        <UserAuth authType="Sign Up" />
      </main>
    </div>
  );
};

export default SignUp;
