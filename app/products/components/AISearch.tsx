import React, { useState } from 'react';
import Image from "next/image";
import { WatchVideo, CloseIcon } from "../../components/icons";

const AISearch = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleWatchVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="rounded-lg py-6 w-full max-w-7xl flex flex-col md:flex-row items-center gap-6">
        <div className="w-[60%] py-4 text-center ml-[-80px]">
          <Image
            src="/AISearch.svg"
            alt="I Search"
            width={763}
            height={653}
            className="imagfilter m-auto"
          />
        </div>
        <div className="w-[40%] py-4">
          <h2 className="text-[30px] font-bold o2-title mb-4">AI Search</h2>
          <p className="text-gray-600 mb-4">
            Easy to configure, straight to the point – our chatbots will strike up conversations effortlessly with candidates. It summarizes the resume with key points and compares it with other resumes to make it easier for recruiters to streamline the selection process. AI-powered automation improves recruitment by handling time-consuming, repetitive tasks like resume screening, candidate sourcing, and interview scheduling. It can process large volumes of data much faster and more accurately than humans, identifying the top candidates for specific roles based on job requirements.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Explore AI Search
            </button>
            <button className="o2-title flex gap-2 items-center" onClick={handleWatchVideo}>
              Watch video <WatchVideo />
            </button>
          </div>
        </div>
      </div>
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeVideo}>
          <div className="bg-white p-12 rounded-lg w-[900px] relative desing-boxmission">
            <video controls autoPlay>
              <source src="/video/AISearch.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              className="mt-4 text-white px-4 py-2 rounded absolute top-[-8px] right-0"
              onClick={closeVideo}
            >
              <CloseIcon  width={60} height={60}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISearch;