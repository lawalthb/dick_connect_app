import Button from '../Button';
import Modal from '../Modal';
import TickIcon from '@/Images/Icons/TickIcon.svg';

const ConfirmAd = ({
  isOpen,
  onClose,
  title,
  description,
  handleConfirm,
  confrimLabel = 'Done',
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="max-w-xl">
      <div className="size-[90px] bg-[#A20030] flex items-center justify-center rounded-full mx-auto">
        <TickIcon />
      </div>
      <div className="mt-5 text-[#5C5C5C] text-center">
        <h3 className=" font-semibold text-[28px] leading-8">{title}</h3>
        <p className="font-normal text-base leading-6 my-14 mx-16">
          {description}
        </p>
      </div>

      <Button
        label={confrimLabel}
        btnclass="w-full h-14"
        onClick={handleConfirm}
      />
    </Modal>
  );
};

export default ConfirmAd;
