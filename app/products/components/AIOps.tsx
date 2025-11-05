import React, { useState } from 'react';
import Image from "next/image";
import { CloseIcon, WatchVideo } from "../../components/icons"
const AIOps = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleWatchVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };
  return (
    <div className=" flex items-center justify-center">
      <div className=" rounded-lg py-6 w-full max-w-7xl flex flex-col md:flex-row items-center gap-6">
        <div className="w-[60%] py-4 text-center ml-[-80px]">
          <Image
            src="/AIOps.svg"
            alt="I Search"
            width={763}
            height={653}
            className="imagfilter m-auto"
          />
        </div>
        <div className="w-[40%] py-4">
          <h2 className=" font-bold o2-title mb-4 text-[30px]">AI Ops</h2>
          <p className="text-gray-600 mb-4">
            AIOps stands for Artificial Intelligence for IT Operations and is the strategic use of AI and machine learning (ML) to automate and streamline IT operations. It analyzes large volumes of data from various IT sources to provide insights like anomaly detection, root cause analysis, and automated remediation, which helps prevent issues before they impact users and speeds up problem resolution. This allows IT teams to manage complexity, reduce costs, and improve efficiency in modern IT environments.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Explore AI Ops
            </button>
            <button className="o2-title flex gap-2 items-center" onClick={handleWatchVideo}>Watch video <WatchVideo /></button>
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
              <CloseIcon width={60} height={60} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIOps;