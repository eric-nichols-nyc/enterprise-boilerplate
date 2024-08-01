"use client";
import React, { use, useRef } from "react";
import { Textarea } from "./ui/textarea";
import { SendHorizontal } from "lucide-react";
import { Button } from "./ui/button";

const Chat = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [messages, setMessages] = React.useState<string[]>([]);

  React.useEffect(() => {
    const messages = Array.from({ length: 10 }, (_, i) => `Chat Message ${i}`);
    setMessages(messages);
    console.log("messages", messages);
  }, []);
  // set the container ref to scroll to the bottom when a new message is added
  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  // create a submit function to add a new message
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const message = formData.get("message") as string;
    setMessages([...messages, message]);

    // clear the form
    form.reset();
  };

  const handleSend = () => {
    if (inputRef.current) {
      const message = inputRef.current.value;
      setMessages([...messages, message]);
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
    <div className="container py-2 h-full w-full flex flex-col">
      <div className="flex flex-col border w-full h-full overflow-y-auto overflow-x-hidden">
        <div
          ref={containerRef}
          className="container py-2 flex flex-col gap-2 rounded-sm w-full h-full overflow-auto"
        >
          {messages.map((message, i) => (
            <div key={i} className="p-4 whitespace-pre-wrap bg-accent">
              {message}
            </div>
          ))}
        </div>
        <div className="elative flex gap-2 items-center">
          <form
            ref={formRef}
            className="w-full container flex gap-2 items-center py-2"
            onSubmit={handleSubmit}
          >
            <Textarea
              ref={inputRef}
              placeholder="Aa"
              name="message"
              onKeyDown={handleKeyPress}
              className="w-full flex items-center min-h-[36px] h-4 resize-none overflow-hidden bg-background"
            />
            <Button type="submit" className="flex items-center justify-center">
              <SendHorizontal size={20} className="text-muted-foreground" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
