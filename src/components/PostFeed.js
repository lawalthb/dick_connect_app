import { FormProvider, useForm } from 'react-hook-form';
import SelectField from './Input/SelectField';
import ImageUpload from './ImageUpload';
import InputField from './Input/InputField';
import Checkbox from './Checkbox';
import Button from './Button';
import { useRouter } from 'next/router';

const PostFeed = () => {
  const methods = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    router.push('/connecting');
  };

  return (
    <div className="md:px-20 w-full mb-20">
      <>
        <h3 className="font-medium text-[24px] leading-6 text-[#5C5C5C]">
          Tagged Connections
        </h3>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-10">
            <SelectField
              label="Social Circle"
              name="social_circle"
              required={false}
            >
              {['Travel', 'Music', 'Gaming', 'Movies/TV', 'Party', 'Sport'].map(
                (option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ),
              )}
            </SelectField>
            <div className="my-10">
              <ImageUpload />
            </div>
            <InputField
              label={'Message'}
              type="text"
              name={'message'}
              required={false}
              placeHolder="Enter your message"
            />
            <div className="flex items-center gap-3">
              <Checkbox name="terms_condition" id="terms" />
              <p className="font-normal text-[14px] text-[#5C5C5C]">
                By continuing, you acknowledge you have agreed to the{' '}
                <span className="text-[#A20030] cursor-pointer">
                  Terms and Conditions
                </span>{' '}
              </p>
            </div>
            <Button
              label="Post"
              type="submit"
              btnclass="w-[252px] mt-10 h-14"
            />
          </form>
        </FormProvider>
      </>
    </div>
  );
};

export default PostFeed;
