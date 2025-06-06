import { useState } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import ImageUpload from '../ImageUpload';
import InputField from '../Input/InputField';
import SelectField from '../Input/SelectField';
import { useForm, FormProvider } from 'react-hook-form';
import ConnectStory from './ConnectStory';
import FilterButton from '../FilterButton';
import Daniella from '@/Images/Daniella.png';
import { FaCirclePlus } from 'react-icons/fa6';
import WorldIcon from '@/Images/Icons/WorldIcon.svg';
import ExpandImageIcon from '@/Images/Icons/ExpandImageIcon.svg';
import { PiDotsThreeOutlineVertical } from 'react-icons/pi';
import Modal from '../Modal';

const ConnectionFeed = () => {
  const [showFilter, setShowFilter] = useState(false);
  const methods = useForm();
  const [showStory, setShowStory] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [expandImage, setExpandImage] = useState(false);

  const handleShowStory = () => {
    setShowStory((prev) => !prev);
  };
  const handleShowMore = (identifier) => {
    if (identifier === 'post') {
      console.log(identifier);
    } else if (identifier === 'delete') {
      console.log(identifier);
    }
    setShowMore((prev) => !prev);
  };

  const onSubmit = (data) => {
    console.log(data);
    handleShowStory();
  };

  const handleFilter = () => {
    setShowFilter((prev) => !prev);
  };
  const handleExpandImage = () => {
    setExpandImage((prev) => !prev);
  };
  return (
    <div className="md:px-20 w-full mb-20">
      {!showStory && (
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
                {[
                  'Travel',
                  'Music',
                  'Gaming',
                  'Movies/TV',
                  'Party',
                  'Sport',
                ].map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
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
      )}
      {showStory && (
        <>
          <div className="flex items-center justify-center gap-3">
            <div className="w-[384px]">
              <ConnectStory />
            </div>
            <div className="w-[91px]">
              <FilterButton handleFilter={handleFilter} />
            </div>
          </div>
          <div className="w-[562px] mx-auto my-20">
            <h3 className="text-black font-medium text-[16px] leading-6">
              Connect Story
            </h3>
            <div className="relative w-[75px]">
              <img
                src={Daniella.src}
                alt="Image"
                className="object-fill w-[75px] h-[108px] text-black border border-[#A20030] p-1 rounded-[20px] my-5"
              />
              <FaCirclePlus className="fill-[#A20030] absolute bottom-2.5 right-2.5 cursor-pointer" />
            </div>
            <div className="bg-white rounded-lg pt-5 pb-10">
              <div className="px-5">
                <div className="flex justify-between items-center">
                  <div className="pl-16">
                    <h3 className="text-semibold text-black text-[15px] leading-5">
                      John Maxwell{' '}
                      <span className="text-[10px] text-gray-500">
                        @johnmaxwell
                      </span>
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <p className="text-semibold text-[#65676B] text-[13px] leading-5">
                        20 Minutes ago
                      </p>
                      <WorldIcon />
                    </div>
                  </div>
                  <div className="relative">
                    <PiDotsThreeOutlineVertical
                      onClick={handleShowMore}
                      className="text-[#292D32] cursor-pointer"
                    />
                    {showMore && (
                      <div className="absolute z-10 right-7 py-4 pl-3 border border-[#FAFAFA] text-[#2E2E2E] bg-white shadow-lg w-[163px] font-normal text-[12px] leading-6 rounded-[10px]">
                        <p
                          onClick={() => handleShowMore('post')}
                          className="cursor-pointer hover:text-[#A20030]"
                        >
                          Report Post
                        </p>
                        <p
                          onClick={() => handleShowMore('delete')}
                          className="cursor-pointer hover:text-[#A20030]"
                        >
                          Delete
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-[#050505] font-normal text-[15px] leading-5 mt-3">
                  We had the privilege of designing the website for Foxspeed: an
                  eCommerce solution in WordPress, with cutting-edge design! We
                  invite you to visit the site foxspeed.pt
                </p>
              </div>
              <div className="relative mt-3">
                <div className="cursor-pointer absolute right-3 top-3 size-[50px] bg-[#000000AD] rounded-full flex items-center justify-center">
                  <ExpandImageIcon onClick={handleExpandImage} />
                </div>
                <img
                  src={Daniella.src}
                  alt="Image"
                  className="object-fill w-full h-[250px] text-black "
                />
              </div>
            </div>
          </div>
        </>
      )}
      {expandImage && (
        <Modal isOpen={expandImage} onClose={handleExpandImage} size="max-w-xl">
          {' '}
          <img
            src={Daniella.src}
            alt="Image"
            className="object-fill w-full text-black pr-1.5"
          />
        </Modal>
      )}
    </div>
  );
};

export default ConnectionFeed;
