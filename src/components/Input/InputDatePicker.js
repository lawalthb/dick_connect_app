import { useMemo, forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { format, parse, isValid } from 'date-fns';
import PropTypes from 'prop-types';
import { GrFormPrevious } from 'react-icons/gr';

function clampYear(date, minYear, maxYear) {
  if (!isValid(date)) return new Date(maxYear, 0, 1);
  const year = date.getFullYear();
  if (year > maxYear) return new Date(maxYear, date.getMonth(), date.getDate());
  if (year < minYear) return new Date(minYear, date.getMonth(), date.getDate());
  return date;
}

function getYearOptions({ minYear, maxYear, showFutureYears, currentYear }) {
  if (showFutureYears) {
    return Array.from(
      { length: maxYear - currentYear + 1 },
      (_, i) => currentYear + i,
    );
  }
  return Array.from({ length: maxYear - minYear + 1 }, (_, i) => maxYear - i);
}

const InputDatePicker = forwardRef((props, ref) => {
  const {
    name,
    onChange: handleChange,
    containerClass,
    required,
    requiredMsg,
    dateFormat = 'MM/dd/yyyy',
    backendDateFormat = 'yyyy-MM-dd',
    showYearDropdown = false,
    showTimeInput = false,
    showTimeSelect = false,
    showTimeSelectOnly = false,
    timeFormat = 'HH:mm',
    timeIntervals = 30,
    extraValidation,
    showFutureYears = false,
    portalId,
    min,
    max,
    ...rest
  } = props;
  const { control } = useFormContext();

  const currentYear = new Date().getFullYear();
  const minYear = min ? new Date(min).getFullYear() : 1900;
  const maxYear = max ? new Date(max).getFullYear() : currentYear;

  const adjustedBackendDateFormat =
    showTimeSelect || showTimeSelectOnly
      ? `${backendDateFormat} HH:mm:ss`
      : backendDateFormat;

  const yearOptions = useMemo(
    () => getYearOptions({ minYear, maxYear, showFutureYears, currentYear }),
    [minYear, maxYear, showFutureYears, currentYear],
  );

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required ? requiredMsg : false,
        validate: { ...extraValidation },
      }}
      render={({ field: { onChange, value } }) => {
        let parsedDate = value
          ? typeof value === 'string'
            ? parse(value, adjustedBackendDateFormat, new Date())
            : value instanceof Date
              ? new Date(value)
              : null
          : null;
        if (!isValid(parsedDate)) parsedDate = null;

        const handleDateChange = (date) => {
          if (!date) {
            onChange(null);
            handleChange && handleChange(null);
          } else if (isValid(date)) {
            const formattedDate = format(date, adjustedBackendDateFormat);
            onChange(formattedDate);
            handleChange && handleChange(formattedDate);
          }
        };

        return (
          <div
            className={`${
              props.inline
                ? 'relative w-full max-w-md mx-auto bg-transparent'
                : 'inline'
            } ${containerClass}`}
            ref={ref}
            id="custom-datepicker"
          >
            <DatePicker
              selected={parsedDate}
              onChange={handleDateChange}
              dateFormat={showTimeSelectOnly ? timeFormat : dateFormat}
              clearButtonClassName="custom-clear-icon"
              formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 3)}
              className={props.inline ? 'bg-transparent' : 'bg-white'}
              showYearDropdown={showYearDropdown}
              yearDropdownItemNumber={50}
              scrollableYearDropdown
              showTimeInput={showTimeInput}
              showTimeSelect={showTimeSelect}
              showTimeSelectOnly={showTimeSelectOnly}
              timeFormat={timeFormat}
              timeIntervals={timeIntervals}
              renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                changeYear,
              }) => {
                const safeDate = clampYear(
                  isValid(date) ? date : new Date(),
                  minYear,
                  maxYear,
                );

                return (
                  <div className="flex items-center justify-between mb-2">
                    <button onClick={decreaseMonth} type="button">
                      <GrFormPrevious />
                    </button>
                    <div className="text-sm">
                      {format(safeDate, 'MMMM yyyy')}
                      {showYearDropdown && (
                        <select
                          value={safeDate.getFullYear()}
                          onChange={({ target: { value } }) =>
                            changeYear(Number(value))
                          }
                          className="ml-2 p-1 border rounded"
                        >
                          {yearOptions.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    <button onClick={increaseMonth} type="button">
                      <GrFormPrevious className="rotate-180" />
                    </button>
                  </div>
                );
              }}
              portalId={portalId}
              {...rest}
            />
          </div>
        );
      }}
    />
  );
});

InputDatePicker.displayName = 'InputDatePicker';
InputDatePicker.propTypes = {
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  inline: PropTypes.bool,
  containerClass: PropTypes.string,
  required: PropTypes.bool,
  requiredMsg: PropTypes.string,
  dateFormat: PropTypes.string,
  backendDateFormat: PropTypes.string,
  showYearDropdown: PropTypes.bool,
  showTimeInput: PropTypes.bool,
  showTimeSelect: PropTypes.bool,
  showTimeSelectOnly: PropTypes.bool,
  timeFormat: PropTypes.string,
  timeIntervals: PropTypes.number,
  extraValidation: PropTypes.object,
  showFutureYears: PropTypes.bool,
  portalId: PropTypes.string,
};

export default InputDatePicker;
