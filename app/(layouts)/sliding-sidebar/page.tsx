import React from "react";
import Navigation from "./_components/Navigation";
import HorizontalList from "./_components/HorizontalList";

const Page2 = () => {
  return (
    <div className="border max-h-[700px] w-full flex overflow-hidden">
      <div>
       <Navigation />
      </div>
      <div className="w-full">
        <HorizontalList />
      </div>
    </div>
  );
};

export default Page2;
