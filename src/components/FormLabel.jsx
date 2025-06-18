import PropTypes from 'prop-types';

const labelSize = {
  sm: 'text-[10px]',
  md: 'text-sm',
  lg: 'text-base',
};

const FormLabel = ({ label, id, name, size = 'md', required }) => {
  return (
    <label
      htmlFor={id || name}
      className={`font-normal w-max ${labelSize[size]} relative w-fit text-[#5C5C5C]`}
    >
      {label}
      {required && label && (
        <span className="text-red-500 relative left-[2px]">*</span>
      )}
    </label>
  );
};

FormLabel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  required: PropTypes.bool,
};

export default FormLabel;
