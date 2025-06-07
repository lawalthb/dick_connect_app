import AuthenticatedNavBar from '@/components/Layout/AuthenticatedNavBar';
import Stream from '@/components/Streams';

const Livestream = () => {
  return (
    <div>
      <AuthenticatedNavBar />
      <section className="flex justify-center py-32">
        <Stream />
      </section>
    </div>
  );
};

export default Livestream;
