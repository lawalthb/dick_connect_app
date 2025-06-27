import { useState } from 'react';
import ChatUsers from './ChatUsers';
import ChatRoom from './ChatRoom';
import EmptyChat from './EmptyChat';
import EmptyChatRoom from '@/Images/EmptyChatRoom.png';
import Daniella from '@/Images/Daniella.png';

const ChatView = () => {
  const users = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    image: Daniella,
    time: '4:30 PM',
  }));

  const [selectedUser, setSelectedUser] = useState(null);
  const [messagesMap, setMessagesMap] = useState({});

  const handleSendMessage = (userId, message) => {
    setMessagesMap((prev) => ({
      ...prev,
      [userId]: [...(prev[userId] || []), message],
    }));
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleBack = () => {
    setSelectedUser(null);
  };

  return (
    <div className="flex w-full md:w-[90%] mx-auto">
      <div
        className={`w-full md:w-1/3 ${selectedUser ? 'hidden md:block' : 'block'}`}
      >
        <ChatUsers users={users} onSelectUser={handleSelectUser} />
      </div>
      {selectedUser && (
        <div className="w-full md:w-2/3">
          <ChatRoom
            user={selectedUser}
            messages={messagesMap[selectedUser.id] || []}
            onSend={(message) => handleSendMessage(selectedUser.id, message)}
            onBack={handleBack}
          />
        </div>
      )}
      {!selectedUser && !messagesMap.id && (
        <div className="hidden md:flex w-full md:w-2/3 items-center justify-center">
          <EmptyChat
            image={EmptyChatRoom}
            title="Welcome to Your Conversations"
            description="Select a chat from the list to start exploring your messages or begin a new conversation"
            width="120"
            height="120"
          />
        </div>
      )}
    </div>
  );
};

export default ChatView;
