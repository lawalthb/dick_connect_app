import { FormProvider, useForm } from 'react-hook-form';
import Modal from '../Modal';
import SelectField from '../Input/SelectField';
import Button from '../Button';
import InputField from '../Input/InputField';

const AddExternalLinks = ({
  activeSettings,
  handleBackToHomePage,
  onSubmitExternalLinks,
}) => {
  const methods = useForm();
  return (
    <Modal
      isOpen={activeSettings.addexternallinks}
      onClose={handleBackToHomePage}
      title="Add External Links"
      size="max-w-xl"
      showFilterIcon={true}
    >
      {' '}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmitExternalLinks)}
          className="space-y-4 mt-10"
        >
          <SelectField
            label="Select Platform"
            name="platform"
            defaultValue=""
            required={false}
          >
            {['Facebook', 'Instagram'].map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </SelectField>
          <InputField
            label={'Link URL'}
            type="text"
            name={'url'}
            required={false}
          />
          <Button label="Save" type="submit" btnclass="w-full h-14" />
        </form>
      </FormProvider>
    </Modal>
  );
};

export default AddExternalLinks;
