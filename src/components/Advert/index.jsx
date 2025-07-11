import { useState } from 'react';
import BackToPreviousScreen from '../BackToPreviousScreen';
import Performance from './Performance';
import CreateAdvert from './CreateAdvert';
import Preview from './Preveiw';
import ConfirmAd from './ConfirmAd';
import AdvertListings from './AdvertListings';

const Advert = () => {
  const [createAd, setCreateAd] = useState(false);
  const [preveiwAd, setPreviewAd] = useState(false);
  const [performanceTable, setPerformanceTable] = useState(false);
  const [previewData, setPreviewData] = useState(null);
  const [confirmAd, setConfirmAd] = useState(null);

  const handleCreateAd = () => {
    setCreateAd((prev) => !prev);
  };
  const handleConfirmAd = () => {
    console.log('Confirm Ad');
    setConfirmAd((prev) => !prev);
  };
  const handleBackToPerformance = () => {
    if (preveiwAd) {
      setPreviewAd(false);
      setCreateAd(true);
    } else {
      setCreateAd(false);
      setPerformanceTable(false);
    }
  };
  const onSubmit = (data) => {
    console.log(data);
    handleConfirmAd();
  };
  const handlePreviewAd = (data) => {
    setPreviewData(data);
    setCreateAd(false);
    setPreviewAd(true);
  };

  const handlePerformanceData = (id) => {
    console.log('Performance data clicked:', id);
    setPerformanceTable((prev) => !prev);
  };

  return (
    <div className="mx-7 lg:mx-28 my-16">
      {(createAd || preveiwAd || performanceTable) && (
        <BackToPreviousScreen onBackClick={handleBackToPerformance} />
      )}

      {!createAd && !preveiwAd && !performanceTable && (
        <Performance
          handleCreateAd={handleCreateAd}
          handlePerformanceData={handlePerformanceData}
        />
      )}
      {preveiwAd && (
        <Preview
          data={previewData}
          handleBackToPerformance={handleBackToPerformance}
          handleConfirmAd={handleConfirmAd}
        />
      )}
      {createAd && (
        <CreateAdvert onSubmit={onSubmit} handlePreviewAd={handlePreviewAd} />
      )}
      {confirmAd && (
        <ConfirmAd
          isOpen={confirmAd}
          onClose={handleConfirmAd}
          title={'Advert Under Review'}
          description={
            'Your ad will be reviewed by our admin for successful posting'
          }
          handleConfirm={handleConfirmAd}
        />
      )}
      <div className="-mx-10">{performanceTable && <AdvertListings />}</div>
    </div>
  );
};

export default Advert;
