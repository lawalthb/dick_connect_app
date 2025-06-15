import { useState } from 'react';
import BackToPreviousScreen from '../BackToPreviousScreen';
import Performance from './Performance';
import CreateAdvert from './CreateAdvert';

const Advert = () => {
  const [createAd, setCreateAd] = useState(false);

  const handleCreateAd = () => {
    setCreateAd((prev) => !prev);
  };
  const handleBackToPerformance = () => {
    setCreateAd(false);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  const handlePreviewAd = (data) => {
    console.log(data);
  };
  return (
    <div className="mx-7 lg:mx-28 my-16">
      {createAd && (
        <BackToPreviousScreen onBackClick={handleBackToPerformance} />
      )}
      {!createAd && <Performance handleCreateAd={handleCreateAd} />}
      {createAd && (
        <CreateAdvert onSubmit={onSubmit} handlePreviewAd={handlePreviewAd} />
      )}
    </div>
  );
};

export default Advert;
