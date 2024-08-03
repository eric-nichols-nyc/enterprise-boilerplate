import Chat from "@/components/chat/chat";
import React from "react";
import { userData } from "@/data";

const ChatPage = () => {
  const args = {
    selectedUser: userData[0],
    messages: userData[0].messages,
    isMobile: false,
  };

  return (
    <div className="h-full">
      <div className="container">
        <h2 className="text-3xl font-bold">Chat</h2>
        <p>A chat component for a web application.</p>
      </div>
      <div className="flex h-[calc(100dvh)] flex-col items-center justify-center p-4 md:px-24 py-32 gap-4">
      <Chat selectedUser={args.selectedUser} messages={args.messages!} isMobile={args.isMobile}/>
      </div>
    </div>
  );
};

export default ChatPage;
