import AuthenticatedNavBar from '@/components/Layout/AuthenticatedNavBar';
import PostFeed from '@/components/PostFeed';

const Post = () => {
  return (
    <div className="px-5 md:px-28">
      <AuthenticatedNavBar />
      <div className="my-20">
        <PostFeed />
      </div>
    </div>
  );
};

export default Post;
