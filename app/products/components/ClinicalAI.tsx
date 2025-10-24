import React, { useState } from 'react';
import Image from "next/image";
import {WatchVideo, LoganimationsIconWhite, ClinicalAI, CloseIcon} from "../../components/icons"

const ClinicalAIComp = () => {
     const [isVideoOpen, setIsVideoOpen] = useState(false);
    
      const handleWatchVideo = () => {
        setIsVideoOpen(true);
      };
    
      const closeVideo = () => {
        setIsVideoOpen(false);
      };
  return (
    <div className="bg-gradient-to-r from-[#161D5D] to-[#3BCAF5]  flex items-center justify-center w-full max-w-7xl mx-auto  rounded-xl relative my-16">
      <div className='absolute right-[-30px] top-[-30px]'>
        <ClinicalAI />
      </div>
      <div className=" w-full max-w-7xl flex flex-col md:flex-row items-center p-16 justify-between justify-center z-10 relative">
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <div className="mb-6">
            <LoganimationsIconWhite width={90} height={90} />
            <h2 className="text-[40px]  text-[#ffffff] mt-4 ">ClinicalAI</h2>
          </div>
          <p className="text-[#ffffff] mb-4">
            AI medical scribe for all clinicians. This module is the ambient AI medical scribe that automates clinical documentation to reduce administrative burdens and enable healthcare professionals to focus more on patient care. This stores the raw text in the EHR platform along with the summarized view. The module is also integrated with ICD-10. This module is developed in accordance with HIPAA; the conversation and chart summary are stored in the clients premises (cloud).
          </p>
          <div className="flex space-x-4 pt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Explore ClinicalAI
            </button>
            <button className="text-[#ffffff] flex gap-2 items-center" onClick={handleWatchVideo}>Watch video <WatchVideo/></button>
          </div>
        </div>
        <div className="md:w-1/2 p-4 text-center">
            <Image
                src="/ClinicalAI.svg"
                alt="I Search"
                width={470}
                height={653}
                className="imagfilter m-auto"
            />
        </div>
      </div>
      <div className='absolute right-0 bottom-0'>
         <Image
                src="/ClineicalAI-bg-v.svg"
                alt="I Search"
                width={654}
                height={575}
                className="imagfilter m-auto"
            />
        
      </div>
      <div className='absolute left-0 bottom-0'>
         <Image
                src="/clinicalAI-Bg.svg"
                alt="I Search"
                width={324}
                height={269}
                className="imagfilter m-auto"
            />
        
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

export default ClinicalAIComp;