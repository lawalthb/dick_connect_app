import Image from 'next/image';
import NavLinks from './NavLinks';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import LoginSignUpButtons from '../LoginSignUpButtons';
import ConnectAppIcon from '@/Images/Icons/Connect-app-logo.svg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-white h-16 w-full">
        <div className="flex items-center gap-20">
          <ConnectAppIcon aria-label="Connect App Logo" />
          <div className="hidden lg:block">
            <NavLinks />
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <LoginSignUpButtons />
        </div>
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoCloseSharp className={`text-3xl text-[#A20030]`} />
          ) : (
            <GiHamburgerMenu className={`text-3xl text-[#A20030]`} />
          )}
        </div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden bg-[#A20030] pb-5 border border-b-white"
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 text-lg">
          <NavLinks />
        </ul>
        <div className="flex flex-col justify-start lg:hidden items-center gap-4 px-20">
          <LoginSignUpButtons color="secondary" extraClassName="w-full" />
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
