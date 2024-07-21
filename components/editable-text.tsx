"use client"

import React, { useState } from 'react';
import { Input } from './ui/input';

type EditableTextProps = {
    initialText: string;
    cb: (text: string) => void;
};

export const EditableText = ({ initialText, cb }:EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState();

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event:any) => {
    setText(event.target.value);
  };

  const handleBlur = () => {
    console.log('handleBlur');
    if (!text) {
      return;
    }
    cb(text);
    setIsEditing(false);
    // Save the changes or perform any required actions here
  };

  return (
    <div onClick={handleDoubleClick}>
      {isEditing ? (
        <Input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <span>{initialText}</span>
      )}
    </div>
  );
};