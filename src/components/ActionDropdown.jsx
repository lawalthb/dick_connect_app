const ActionDropdown = ({ onClose, items = [], handleClick }) => {
  return (
    <div className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md right-0">
      <ul className="py-1 text-sm text-gray-700">
        {items?.map((item) => {
          return (
            <div
              key={item.key}
              onClick={() => {
                handleClick(item.key);
                onClose && onClose();
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item.label}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ActionDropdown;
