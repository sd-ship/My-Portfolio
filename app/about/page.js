import React from 'react';

const page = () => {
  return (
    <div className="px-4 sm:px-6">
      {/* Title */}
      <h1 className="my-16 text-center text-4xl md:text-8xl font-bold text-gray-500">
        My Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
        {/* Column 1 */}
        <div className="space-y-8">
          <div className="text-2xl md:text-4xl flex flex-col justify-center items-center text-center">
            <img
              className="h-24 w-24 hover:scale-110 transition-transform duration-200 ease-in-out"
              src="html.svg"
              alt="html"
            />
            HTML
          </div>
          <div className="text-2xl md:text-4xl flex flex-col justify-center items-center text-center">
            <img
              className="h-24 w-24 hover:scale-110 transition-transform duration-200 ease-in-out"
              src="css.svg"
              alt="css"
            />
            CSS
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-8">
          <div className="text-2xl md:text-4xl flex flex-col justify-center items-center text-center">
            <img
              className="h-24 w-24 hover:scale-110 transition-transform duration-200 ease-in-out"
              src="javascript.svg"
              alt="javascript"
            />
            JavaScript
          </div>
          <div className="text-2xl md:text-4xl flex flex-col justify-center items-center text-center">
            <img
              className="h-24 w-24 hover:scale-110 transition-transform duration-200 ease-in-out"
              src="cpp.svg"
              alt="cpp"
            />
            C++
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-8">
          <div className="text-2xl md:text-4xl flex flex-col justify-center items-center text-center">
            <img
              className="h-24 w-24 hover:scale-110 transition-transform duration-200 ease-in-out"
              src="java.svg"
              alt="java"
            />
            Java
          </div>
          <div className="text-2xl md:text-4xl flex flex-col justify-center items-center text-center">
            <img
              className="h-24 w-24 hover:scale-110 transition-transform duration-200 ease-in-out"
              src="Nextjs.svg"
              alt="nextjs"
            />
            Next.js
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="hover:scale-[1.01] hover:text-white transition-transform ease-in-out duration-200 border rounded-xl p-6 md:p-10 text-gray-500 text-center text-base md:text-xl max-w-4xl mx-auto mb-20">
        <h1 className="mb-10 text-4xl md:text-6xl font-bold text-gray-600">About Me</h1>
        <p>
          A frontend developer passionate about crafting clean, responsive, and interactive web experiences.
          I specialize in technologies like Next.js, React, and Tailwind CSS, bringing modern designs to life
          with smooth animations and optimized performance.
        </p>
      </div>
    </div>
  );
};

export default page;