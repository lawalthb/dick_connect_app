import { FormProvider, useForm } from 'react-hook-form';
import Modal from '../Modal';
import InputField from '../Input/InputField';
import Button from '../Button';

const ChangePassword = ({
  activeSettings,
  handleBackToHomePage,
  onSubmitNewPassword,
}) => {
  const methods = useForm();
  return (
    <Modal
      isOpen={activeSettings.changepassword}
      onClose={handleBackToHomePage}
      title="Change Password"
      size="max-w-xl"
      showFilterIcon={true}
    >
      {' '}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmitNewPassword)}
          className="space-y-4 mt-10"
        >
          <InputField
            label={'Old Password'}
            type="password"
            name={'old_password'}
          />
          <InputField
            label={'New Password'}
            type="password"
            name={'new_password'}
          />
          <InputField
            label={'Confirm Password'}
            type="password"
            name={'confirm_password'}
          />

          <Button
            label="Change Password"
            type="submit"
            btnclass="w-full h-14"
          />
        </form>
      </FormProvider>
    </Modal>
  );
};

export default ChangePassword;
