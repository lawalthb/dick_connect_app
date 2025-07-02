// components/CountrySelect.js
import React from 'react';
import Select, { components } from 'react-select';
import { Controller, useFormContext } from 'react-hook-form';
import { countryOptions } from '../Utils/Countries';

const CountrySelect = ({
  name = 'country',
  label,
  required = true,
  containerClass = 'mb-5',
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: 'rgba(162,0,48,0.29)',
      border: state.isFocused
        ? '2px solid #A20030'
        : errors?.[name]?.message
          ? '1px solid red'
          : '1px solid white',
      borderRadius: '10px',
      paddingLeft: '10px',
      height: '60px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#A20030',
      },
      border: '1px solid #374151',
    }),
  };

  const customSingleValue = ({ data }) => (
    <div className="flex items-center gap-2">
      <img src={data.flag} alt={data.name} className="w-5 h-5 rounded-full" />
      <span>{data.name}</span>
    </div>
  );

  const customOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        className="flex items-center gap-2 px-2 py-2 hover:bg-blue-500 text-gray-500 cursor-pointer bg-[rgba(162,0,48,0.29)]"
      >
        <img src={data.flag} alt={data.name} className="w-5 h-5 rounded-full" />
        <span>{data.name}</span>
      </div>
    );
  };

  const customDropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      <svg
        className="w-5 h-5 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </components.DropdownIndicator>
  );

  return (
    <div className={containerClass}>
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={{
          validate: (value) => !!value,
          required: required ? 'Country is required' : false,
        }}
        render={({ field }) => (
          <Select
            {...field}
            options={countryOptions}
            getOptionLabel={(e) => `${e.name} ${e.dialCode} ${e.iso2}`}
            getOptionValue={(e) => e.iso2}
            isClearable
            components={{
              Option: customOption,
              SingleValue: customSingleValue,
              DropdownIndicator: customDropdownIndicator,
            }}
            styles={customStyles}
          />
        )}
      />

      {required && errors[name]?.message && (
        <p className="text-sm text-red-600 mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default CountrySelect;
