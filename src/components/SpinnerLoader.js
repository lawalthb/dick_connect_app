import React from 'react';
import PropTypes from 'prop-types';

const SpinnerLoader = ({
  width = 'w-4',
  height = 'h-4',
  borderT = 'border-t-2',
  borderTBg = 'border-t-blue-500',
  borderBg = 'border-gray-300',
  extraclass = '',
  borderThickness = 'border-2',
}) => {
  return (
    <div
      className={`${borderThickness} ${borderBg} ${borderT} ${borderTBg} rounded-full ${width} ${height} animate-spin ${extraclass}`}
    ></div>
  );
};

SpinnerLoader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderT: PropTypes.string,
  borderTBg: PropTypes.string,
  borderBg: PropTypes.string,
  extraclass: PropTypes.string,
  borderThickness: PropTypes.string,
};

export default SpinnerLoader;
