"use client";
import {Message, UserData} from "@/data";
import React, { use, useRef } from "react";
import { Textarea } from "../ui/textarea";
import { SendHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChatList } from "./chat-list";

type ChatProps = {
  messages: Message[];
  selectedUser: UserData;
  isMobile: boolean;
}

const Chat = ({messages, selectedUser, isMobile}: ChatProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [userMessages, setMessages] = React.useState<Message[]>(messages);

  const sendMessage = (newMessage: Message) => {
    setMessages([...userMessages, newMessage]);
  };

  // React.useEffect(() => {
  //   const messages = Array.from({ length: 10 }, (_, i) => `Chat Message ${i}`);
  //   setMessages(messages);
  //   console.log("messages", messages);
  // }, []);
  // // set the container ref to scroll to the bottom when a new message is added
  // React.useEffect(() => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollTop = containerRef.current.scrollHeight;
  //   }
  // }, [messages]);

  // create a submit function to add a new message
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const message = formData.get("message") as string;
    //setMessages([...messages, message]);

    // clear the form
    form.reset();
  };

  const handleSend = () => {
    if (inputRef.current) {
      const message = inputRef.current.value;
      //setMessages([...messages, message]);
      inputRef.current.focus();
    }
    formRef.current?.reset();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">      
      <ChatList messages={userMessages} selectedUser={selectedUser} isMobile={isMobile} sendMessage={sendMessage}/>
    </div>
  );
};

export default Chat;
