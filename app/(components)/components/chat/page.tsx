import Chat from "@/components/chat";
import React from "react";

const ChatPage = () => {
  return (
    <div className="h-full">
      <div className="container">
        <h2 className="text-3xl font-bold">Chat</h2>
        <p>A chat component for a web application.</p>
      </div>
      <div className="h-[70%]">
        <Chat />
      </div>
    </div>
  );
};

export default ChatPage;
