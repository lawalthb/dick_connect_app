import React from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';

const SearchField = ({ placeholder, value, onChange, className = '' }) => {
  return (
    <div className={`relative w-full ${className} group`}>
      <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <FiSearch className="text-gray-500" />
      </span>
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        value={value}
        onChange={onChange}
        className="w-full pl-3 pr-4 py-2 text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A20030] focus:border-transparent text-sm"
      />
    </div>
  );
};

SearchField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SearchField;
