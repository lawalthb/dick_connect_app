import FilterIcon from '@/Images/Icons/FilterIcon';

const FilterButton = ({ handleFilter }) => {
  return (
    <div
      onClick={handleFilter}
      className="flex justify-center items-center mr-10 w-[91px] h-10 ml-auto gap-2 bg-white border border-[#C7C7C7] rounded shadow-sm hover:bg-[#A20030] hover:shadow-md group transition duration-200 ease-in-out cursor-pointer"
    >
      <h3 className="text-[#6D7A98] group-hover:text-white font-medium text-sm leading-4">
        Filter
      </h3>
      <FilterIcon className="fill-[#6D7A98] group-hover:fill-white w-4 h-4" />
    </div>
  );
};

export default FilterButton;
