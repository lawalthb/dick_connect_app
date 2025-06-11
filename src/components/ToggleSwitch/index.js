const ToggleSwitch = ({ handleToggleClick, enabled }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={enabled}
        onChange={handleToggleClick}
      />
      <div className="w-11 h-6 bg-[#5C5C5C] peer-focus:outline-none rounded-full peer peer-checked:bg-[#A20030] transition-colors duration-300"></div>
      <div className="absolute left-0.5 top-3 bg-white w-5 h-5 rounded-full transition-transform duration-300 peer-checked:translate-x-full"></div>
    </label>
  );
};

export default ToggleSwitch;
