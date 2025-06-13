import { FormProvider, useForm } from 'react-hook-form';
import Modal from '../Modal';
import SelectField from '../Input/SelectField';
import Button from '../Button';

const ChangeCountry = ({
  activeSettings,
  handleBackToHomePage,
  onSubmitNewCountry,
}) => {
  const methods = useForm();
  return (
    <Modal
      isOpen={activeSettings.changecountry}
      onClose={handleBackToHomePage}
      title="Change Country"
      size="max-w-xl"
      showFilterIcon={true}
    >
      {' '}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmitNewCountry)}
          className="space-y-4 mt-10"
        >
          <SelectField
            label="Country"
            name="country"
            defaultValue=""
            type="country"
            required={false}
            className="mb-32"
          />
          <Button label="Change Country" type="submit" btnclass="w-full h-14" />
        </form>
      </FormProvider>
    </Modal>
  );
};

export default ChangeCountry;
