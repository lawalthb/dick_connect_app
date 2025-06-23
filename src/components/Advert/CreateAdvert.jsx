import { FormProvider, useForm, useWatch } from 'react-hook-form';
import InputField from '../Input/InputField';
import SelectField from '../Input/SelectField';
import ImageUpload from '../ImageUpload';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { useEffect, useState } from 'react';
import MultiSelectDropdown from '../Input/MultiSelectDropDown';

const CreateAdvert = ({ onSubmit, handlePreviewAd }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const methods = useForm();
  const { control } = methods;

  // Watch all fields
  const allValues = useWatch({ control });

  const handleOptionToggle = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  return (
    <div className="w-[90%] lg:w-[70%] mx-auto mt-10">
      <div className="my-5">
        <h3 className="text-[#5C5C5C] font-[500] text-[24px] leading-6">
          Create Advert
        </h3>
        <p className="font-normal text-base leading-6 text-[#8F8F8F] mt-5">
          Fill in details for your advert to promote your services
        </p>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="w-full md:w-1/2">
              <InputField
                label={'Ad Headline'}
                type="text"
                name={'ad_headline'}
                required={false}
              />
            </div>
            <div className="flex gap-10 w-full md:w-1/2">
              {/* <SelectField
                label="Ad Placement"
                name="ad_placement"
                defaultValue=""
                required={false}
              >
                {['Swipe Page'].map((placement) => (
                  <option key={placement} value={placement}>
                    {placement}
                  </option>
                ))}
              </SelectField> */}

              <SelectField
                label="Target Audience"
                name="target_audience"
                defaultValue=""
                required={false}
              >
                {['Location'].map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </SelectField>
            </div>
          </div>
          <div className="w-full">
            <MultiSelectDropdown
              label="Ad Placement"
              options={['Swipe Page', 'Sports', 'Live Stream', 'Just Connect']}
              selectedOptions={selectedOptions}
              handleOptionToggle={handleOptionToggle}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="flex gap-4 w-full md:w-1/2">
              <InputField
                label={'Start Date'}
                type="date"
                name={'start_date'}
                required={false}
                className="md:max-w-48"
              />
              <InputField
                label={'End Date'}
                type="date"
                name={'end_date'}
                required={false}
                className="md:max-w-48"
              />
            </div>
            <div className="w-fill md:w-1/2">
              <SelectField
                label="Schedule"
                name="shedule"
                defaultValue=""
                required={false}
              >
                {['Daily'].map((placement) => (
                  <option key={placement} value={placement}>
                    {placement}
                  </option>
                ))}
              </SelectField>
            </div>
          </div>
          <div className="my-10">
            <ImageUpload
              handlePreview={(url) => methods.setValue('identityMedia', url)}
            />
          </div>
          <InputField
            label={'Ad Copy'}
            type="text"
            name={'ad_copy'}
            required={false}
          />
          <div className="flex items-center gap-x-2 my-10">
            <Checkbox name={'acknowledge'} id={'notify_user'} />
            <label
              htmlFor={'acknowledge'}
              className="font-normal text-sm text-[#5C5C5C]"
            >
              By continuing, you acknowledge you have agreed to the{' '}
              <span className="text-[#A20030]">Terms and Conditions</span>
            </label>
          </div>
          <div className="flex gap-x-5 items-center max-w-[510px] ml-auto">
            <Button
              label="Create Advert"
              type="submit"
              btnclass="w-full h-14"
            />
            <Button
              label="Preview Ad"
              variant="outlined"
              onClick={() => handlePreviewAd?.(allValues)}
              btnclass="w-full h-14"
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateAdvert;
