import Advert from '@/components/Advert';
import AuthenticatedNavBar from '@/components/Layout/AuthenticatedNavBar';

const Advertising = () => {
  return (
    <div>
      <AuthenticatedNavBar />
      <section>
        <Advert />
      </section>
    </div>
  );
};

export default Advertising;
