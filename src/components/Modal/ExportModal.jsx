import PropTypes from 'prop-types';
import Modal from '.';

const ExportModal = ({ showExport, handleExport, children }) => {
  return (
    <Modal
      isOpen={showExport}
      onClose={handleExport}
      title="Export List"
      size="max-w-xl"
      showExportIcon={true}
    >
      {children}
    </Modal>
  );
};

ExportModal.propTypes = {
  showFilter: PropTypes.bool.isRequired,
  handleFilter: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExportModal;
