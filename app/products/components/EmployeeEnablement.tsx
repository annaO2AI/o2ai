import React, { useState } from 'react';
import Image from "next/image";
import {CloseIcon, WatchVideo} from "../../components/icons"
const EmployeeEnablement = () => {
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
        <div className="w-[40%] py-4">
          <h2 className="text-[30px] font-bold o2-title mb-4">Employee Enablement</h2>
          <p className="text-gray-600 mb-4">
            A single AI-enabled screen interface offers insights across various systems including Finance, HR, Claims, Members, Providers, Vendors, UM/CM, Enrollment, Products and more, simplifying access to vital data. Effortless dataset configurations streamline management, ensuring seamless operations across all domains. This system&apos;s efficiency not only boosts productivity but also reduces costs associated with corporate reporting significantly. Centralizing data access eliminates the necessity for multiple reporting platforms, leading to substantial savings for the organization. This consolidated approach not only enhances decision-making but also optimizes resource allocation, ultimately contributing to financial savings. Furthermore, this tool will be developed in-house. 
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Explore Employee Enablement
            </button>
            <button className="o2-title flex gap-2 items-center" onClick={handleWatchVideo}>Watch video <WatchVideo/></button>
          </div>
        </div>
        <div className="w-[60%] py-4 text-center">
            <Image
                 src="/EmployeeEnablement1.svg"
                 alt="I Search"
                 width={763}
                 height={605}
                 className="imagfilter m-auto"
               />
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

export default EmployeeEnablement;