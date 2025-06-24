import { useController } from 'react-hook-form';

const RadioGroup = ({ control, name, defaultValue = 'active' }) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-3  cursor-pointer">
        <input
          type="radio"
          value="active"
          checked={value === 'active'}
          onChange={() => onChange('active')}
          className="cursor-pointer accent-[#A20030] focus:ring-offset-0 focus:ring-offset-white"
        />
        <span className={`leading-6 font-normal text-base text-[#5C5C5C]`}>
          Active
        </span>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="radio"
          value="inactive"
          checked={value === 'inactive'}
          onChange={() => onChange('inactive')}
          className="cursor-pointer accent-[#A20030] focus:ring-offset-0 focus:ring-offset-white"
        />
        <span className={`leading-6 font-normal text-base text-[#5C5C5C]`}>
          Inactive
        </span>
      </div>
    </div>
  );
};

export default RadioGroup;
