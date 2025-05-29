import React from 'react';
import PropTypes from 'prop-types';

const AuthWrapper = ({
  children,
  heading,
  subHeading,
  linkDescription,
  email,
}) => {
  return (
    <div className="flex flex-col mx-auto items-center p-5 xl:p-10 lg:w-1/3 md:w-1/2 sm:w-2/3 w-full mt-5 flex-grow">
      <div className="flex flex-col gap-y-2 w-full flex-grow">
        <h2 className="text-center text-[28px] text-gray-500 font-semibold leading-[32px]">
          {heading}
        </h2>
        <p className="text-gray-500 text-base font-normal text-center">
          A confirmation code has been sent to “
          <span className="text-[#A20030]">{email}</span>”
        </p>
        <p className="text-gray-500 text-base font-normal text-center">
          {subHeading}
        </p>
        {children}
        <p className="text-center text-sm text-gray-500 font-light">
          {linkDescription}{' '}
        </p>
      </div>
    </div>
  );
};

AuthWrapper.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  linkDescription: PropTypes.string,
};
export default AuthWrapper;
