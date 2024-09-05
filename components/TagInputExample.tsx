import React, { useState } from 'react';
import { Tag, TagInput } from 'emblor';
import { Button } from '@/components/ui/button';

function uuid() {
  return crypto.getRandomValues(new Uint32Array(1))[0].toString();
}

export default function TagInputExample() {
  const initialTags = [
    { id: uuid(), text: 'Sports' },
    { id: uuid(), text: 'Programming' },
    { id: uuid(), text: 'Travel' },
  ];

  const [tags, setTags] = useState<Tag[]>(initialTags);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Submitted tags:', tags);
    // Here you can handle the submission, e.g., send data to an API
  };

  return (
    <section className="z-10 max-w-5xl w-full flex flex-col items-center text-center gap-5">
      <div className="w-full py-8">
        <div className="w-full relative my-4 flex flex-col space-y-2">
          <div className="preview flex min-h-[350px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
            <form onSubmit={handleSubmit} className="space-y-8 flex flex-col items-start">
              <div className="flex flex-col items-start">
                <label htmlFor="topics" className="text-left mb-2">Topics</label>
                <TagInput
                  id="topics"
                  activeTagIndex={activeTagIndex}
                  setActiveTagIndex={setActiveTagIndex}
                  placeholder="Enter a topic"
                  tags={tags}
                  className="sm:min-w-[450px]"
                  setTags={setTags}
                />
                <p className="text-sm text-gray-500 mt-1">These are the topics that you're interested in.</p>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}