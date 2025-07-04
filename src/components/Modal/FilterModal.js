import PropTypes from 'prop-types';
import Modal from '.';

const FilterModal = ({ showFilter, handleFilter, children }) => {
  return (
    <Modal
      isOpen={showFilter}
      onClose={handleFilter}
      title="Filter"
      size="max-w-xl"
      showFilterIcon={true}
    >
      {children}
    </Modal>
  );
};

FilterModal.propTypes = {
  showFilter: PropTypes.bool.isRequired,
  handleFilter: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterModal;
