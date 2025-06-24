import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import FilterModalIcon from '@/Images/Icons/FilterModalIcon.svg';
import ExportIcon from '@/Images/Icons/ExportIcon.svg';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'max-w-lg',
  showFilterIcon = false,
  showExportIcon = false,
}) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm backdrop-brightness-75 bg-white/10">
      <div
        className={`bg-white rounded-2xl shadow-xl w-full ${size} mx-4 p-6 relative`}
      >
        <IoClose
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 cursor-pointer"
        />

        {title && (
          <div className="flex items-center gap-3">
            {showFilterIcon && <FilterModalIcon />}
            {showExportIcon && <ExportIcon />}
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
