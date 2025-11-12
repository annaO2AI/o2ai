import React, { useState } from 'react';
import {CloseIcon, FaxAutomation, WatchVideo} from "../../components/icons"
const FaxAutomationCom = () => {
     const [isVideoOpen, setIsVideoOpen] = useState(false);
        
          const handleWatchVideo = () => {
            setIsVideoOpen(true);
          };
        
          const closeVideo = () => {
            setIsVideoOpen(false);
          };
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-500 flex items-center justify-center  w-full max-w-7xl mx-auto  rounded-xl relative mt-[-100px] mb-[100px]">
      <div className="bg-white rounded-lg p-12 w-full flex flex-col items-left w-full m-16">
        <div className="flex items-center mb-4 gap-3">
            <FaxAutomation  />
          <h2 className="text-2xl font-bold text-gray-800">Fax Automation</h2>
        </div>
        <p className="text-gray-600 text-left mb-4">
          Fax automation AI uses artificial intelligence to automatically read, classify, and extract data from incoming faxes, then routes it to the correct patient charts or systems, significantly reducing manual tasks for healthcare staff. This technology uses natural language processing to understand unstructured data, improving accuracy and speed in patient communication and administrative workflows, ultimately improving efficiency and freeing staff to focus on patient care.
        </p>
        <div className="flex space-x-4 pt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                     Explore Fax Automation
            </button>
            <button className=" flex gap-2 items-center" onClick={handleWatchVideo}>Watch video <WatchVideo/></button>
        </div>
      </div>
          {isVideoOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeVideo}>
                  <div className="bg-white p-12 rounded-lg w-[900px] relative desing-boxmission">
                      <video controls autoPlay>
                          <source src="/video/AISearch6.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                      </video>
                      <button
                          className="mt-4 text-white px-4 py-2 rounded absolute top-[-8px] right-0"
                          onClick={closeVideo}
                      >
                          <CloseIcon width={60} height={60} />
                      </button>
                  </div>
              </div>
          )}
    </div>
  );
};

export default FaxAutomationCom;