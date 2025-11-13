import React, { useState } from 'react';
import Image from "next/image";
import {WatchVideo, LoganimationsIconWhite, ClinicalAI, CloseIcon} from "../../components/icons"

const FaxAutomationNew = () => {
     const [isVideoOpen, setIsVideoOpen] = useState(false);
    
      const handleWatchVideo = () => {
        setIsVideoOpen(true);
      };
    
      const closeVideo = () => {
        setIsVideoOpen(false);
      };
  return (
    <div className="bg-fax-automation flex items-center justify-center w-full max-w-7xl mx-auto  rounded-xl relative mb-16">
      {/* <div className='absolute right-[-30px] top-[-30px]'>
        <ClinicalAI />
      </div> */}
      <div className=" w-full max-w-7xl flex flex-col md:flex-row items-center p-16 justify-between justify-center z-10 relative">
         <div className="w-[40%] p-4 text-center flex gap-3 items-center h-[260px]">
            <Image
                src="/FaxAutomation-Img.png"
                alt="I Search"
                width={470}
                height={653}
                className="imagfilter m-auto"
            />
        </div>
        <div className="w-[60%] py-16 px-4 text-center md:text-left ">
          <div className="mb-6">
            <div className="text-center flex gap-3 items-left">
              <div>
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M55.1235 28.046H55.1233V28.0254H14.8789V45.733H21.189L24.9593 38.144H45.0688L48.8136 45.733H55.1233V28.1177L55.1235 28.046ZM21.4404 34.3496C20.6075 34.3496 19.9322 33.67 19.9322 32.8319C19.9322 31.9934 20.6075 31.3138 21.4404 31.3138C22.273 31.3138 22.9483 31.9934 22.9483 32.8319C22.9483 33.67 22.273 34.3496 21.4404 34.3496ZM25.9648 34.3496C25.1318 34.3496 24.4566 33.67 24.4566 32.8319C24.4566 31.9934 25.1318 31.3138 25.9648 31.3138C26.7978 31.3138 27.473 31.9934 27.473 32.8319C27.473 33.67 26.7978 34.3496 25.9648 34.3496Z" fill="white"/>
                  <path d="M22.7212 26.9515V15.5625V15.5367H47.2757V26.9515H49.7547V13.0773L49.7549 13.0206H49.7547V13H20.2422V26.9515H22.7212Z" fill="white"/>
                  <path d="M44.3902 19.4569V19.4396H25.7837L25.63 19.4395V19.4396H25.6094V20.5126H44.3902V19.4612V19.4569Z" fill="white"/>
                  <path d="M25.7837 23.1955L25.63 23.1953V23.1955H25.6094V24.2685H44.3902V23.2164V23.2121V23.1955H25.7837Z" fill="white"/>
                  <path d="M44.704 50.581L44.6985 50.5755L44.6983 50.5756C44.6932 50.5705 44.6892 50.5666 44.684 50.5615C42.2026 52.972 38.7762 54.465 34.9978 54.465C31.2193 54.465 27.793 52.9721 25.3114 50.5615L23.4609 52.3589C26.4135 55.2268 30.4925 57.0007 34.9977 57.0007C39.474 57.0007 43.5278 55.2486 46.4756 52.4133C46.4903 52.3994 46.5056 52.3866 46.5201 52.3726L46.5199 52.3725C46.5246 52.3678 46.5297 52.3635 46.5345 52.3589C45.7003 51.5488 45.455 51.3104 44.704 50.581Z" fill="white"/>
                  <path d="M27.2188 48.5533C29.212 50.4565 31.9644 51.635 34.9994 51.635C37.9836 51.635 40.6901 50.4916 42.6751 48.6444C42.7045 48.6174 42.7368 48.5942 42.7658 48.5668L42.7651 48.5662C42.7699 48.5616 42.7754 48.5579 42.78 48.5533C42.1245 47.9272 41.5107 47.3417 40.9705 46.826L40.9637 46.8192L40.9636 46.8194C40.9592 46.815 40.9539 46.8099 40.9494 46.8057C39.4249 48.2608 37.3205 49.1621 34.9994 49.1621C32.6786 49.1621 30.5738 48.2608 29.0494 46.8057L27.2188 48.5533Z" fill="white"/>
                  <path d="M37.2769 43.0869L37.2512 43.0626L37.2509 43.0627C37.2475 43.0595 37.2402 43.0528 37.237 43.0498C36.6642 43.583 35.8733 43.9133 35.0011 43.9133C34.1289 43.9133 33.3379 43.583 32.7651 43.0498L30.9766 44.715C32.0076 45.6749 33.431 46.2694 35.0011 46.2694C36.5401 46.2694 37.9359 45.6957 38.9617 44.769C38.978 44.7547 38.9957 44.7424 39.0116 44.7279L39.011 44.7273C39.0156 44.7229 39.0209 44.7193 39.0255 44.715C38.6471 44.3626 37.568 43.3579 37.2769 43.0869Z" fill="white"/>
                </svg>
              </div>
            <h2 className="text-[34px]  text-[#ffffff] font-semibold">Fax Automation</h2>
           </div>
          </div>
          <p className="text-[#ffffff] mb-4">
            Fax automation AI uses artificial intelligence to automatically read, classify, and extract data from incoming faxes, then routes it to the correct patient charts or systems, significantly reducing manual tasks for healthcare staff. This technology uses natural language processing to understand unstructured data, improving accuracy and speed in patient communication and administrative workflows, ultimately improving efficiency and freeing staff to focus on patient care.
          </p>
          <div className="flex space-x-4 pt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Explore Fax Automation
            </button>
            <button className="text-[#ffffff] flex gap-2 items-center" onClick={handleWatchVideo}>Watch video <WatchVideo/></button>
          </div>
        </div>
      </div>
      {isVideoOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeVideo}>
                <div className="bg-white p-12 rounded-lg w-[900px] relative desing-boxmission">
                  <video controls autoPlay>
                    <source src="/video/AIDocAssits.mp4" type="video/mp4" />
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

export default FaxAutomationNew;