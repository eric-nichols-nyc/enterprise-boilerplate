import React from "react";

const Page1 = () => {
  return (
    <div className="min-h-screen flex flex-col h-screen">
      <header className="bg-red-50 h-[80px]">Header</header>
      <div className="flex-1 flex flex-row overflow-y-hidden">
        <main className="flex-1 bg-indigo-100 relative">
          <div className="h-[200px]">Top Div</div>
          <div className="flex-1 bg-indigo-500 overflow-y-auto h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="h-20 border">
                {i}
              </div>
            ))}
          </div>
        </main>

        <nav className="order-first sm:w-32 lg:w-52  bg-purple-200 overflow-y-auto">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="h-[35px] border">
              {i}
            </div>
          ))}
        </nav>
      </div>
      <footer className="bg-gray-100">Footer</footer>
    </div>
  );
};

export default Page1;
