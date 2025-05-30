import { Controller, useFormContext } from 'react-hook-form';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FormLabel from '../FormLabel';
import { getFormFieldError } from '../Utils/methods';

export default function SelectField({
  name,
  required = true,
  label,
  type,
  country,
  id,
  children,
  extraValidation,
  size = 'md',
  containerClass = 'mb-5',
  className = '',
  requiredMsg = 'This field is required',
  ...props
}) {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  const sizes = {
    sm: 'text-sm rounded-md',
    md: 'text-base rounded-[10px]',
    lg: 'text-xl rounded-xl ',
  };
  const baseClasses =
    'py-2.5 pl-3 w-full h-14 text-gray-500 bg-[rgba(162,0,48,0.29)] placeholder-gray-400 focus:outline-none focus:border-[#A20030] focus:border-2 transition duration-300 ease-in-out ';
  const errorClass = errors?.[name]?.message
    ? 'border-red-600 border'
    : 'border border-white dark:border-gray-950';
  const hoverClass = 'hover:border hover:border-[#A20030] ';
  const disabledClass =
    'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:placeholder-gray-400 disabled:border-gray-200';
  const inputClasses = `${baseClasses} ${sizes[size]} ${errorClass} ${hoverClass} ${disabledClass} ${className}`;

  const customSelect = () => {
    switch (type) {
      case 'country':
        return (
          <>
            <Controller
              name={name}
              control={control}
              rules={{
                validate: (value) => !!value,
                required: required ? 'Country is required' : false,
              }}
              render={({ field: { onChange, value } }) => (
                <CountryDropdown
                  value={value}
                  name="country"
                  onChange={onChange}
                  className={inputClasses}
                />
              )}
            />
          </>
        );
      case 'region':
        return (
          <>
            <Controller
              name={name}
              control={control}
              rules={{
                validate: (value) => !!value,
                required: required ? 'City is required' : false,
              }}
              render={({ field: { onChange, value } }) => (
                <RegionDropdown
                  country={country}
                  value={value}
                  name="region"
                  onChange={onChange}
                  className={inputClasses}
                />
              )}
            />
          </>
        );
      default:
        return (
          <>
            <select
              className={inputClasses}
              id={id || name}
              {...register(name, {
                required: required ? requiredMsg : false,
                validate: {
                  ...extraValidation,
                },
              })}
              {...props}
            >
              {children}
            </select>
          </>
        );
    }
  };

  const errorMessage = getFormFieldError(errors, name);

  return (
    <div className={`flex flex-col gap-y-1 w-full ${containerClass}`}>
      <FormLabel
        id={id}
        name={name}
        size={size}
        label={label}
        required={required}
      />
      <div className="custom-select" id="custom-select">
        {customSelect()}
      </div>
      {errorMessage && (
        <p className="text-red-500 text-xs font-normal">{errorMessage}</p>
      )}
    </div>
  );
}
