import { Controller, useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

const Checkbox = ({ name, ...rest }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <input
          {...field}
          {...rest}
          type="checkbox"
          checked={field.value}
          onChange={(e) => field.onChange(e.target.checked)}
          style={{ accentColor: '#A20030' }}
        />
      )}
    />
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Checkbox;
