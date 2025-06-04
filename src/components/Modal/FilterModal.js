import { useForm, FormProvider } from 'react-hook-form';
import Modal from '.';
import InputField from '../Input/InputField';
import Button from '../Button';

const FilterModal = ({ showFilter, handleFilter }) => {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal
      isOpen={showFilter}
      onClose={handleFilter}
      title="Filter"
      size="max-w-xl"
      showFilterIcon={true}
    >
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-4 my-5"
        >
          <InputField label={'Age'} type="text" name={'age'} required={false} />
          <InputField
            label={'Language'}
            type="text"
            name={'language'}
            required={false}
          />
          <InputField
            label={'Interest'}
            type="text"
            name={'interest'}
            required={false}
          />
          <Button type="submit" label="Apply Filter" className="w-full h-14" />
        </form>
      </FormProvider>
    </Modal>
  );
};

export default FilterModal;
