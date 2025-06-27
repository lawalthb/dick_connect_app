import ChatView from '@/components/Chat';
import AuthenticatedNavBar from '@/components/Layout/AuthenticatedNavBar';

const Chat = () => {
  return (
    <div>
      <AuthenticatedNavBar />
      <ChatView />
    </div>
  );
};

export default Chat;
