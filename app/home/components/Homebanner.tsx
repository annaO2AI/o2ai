import React from 'react';
import {LoganimationsIconWhite } from "./../../components/icons"
import { useRouter } from 'next/navigation';
import VideoPlayer from './../../components/VideoPlayer';

const HeaderBanner: React.FC = () => {
   const router = useRouter();

  const handleExploreClick = () => {
    router.push('/products');
  };
  return (
    <div className="bg-gradient-to-r from-[#0975BB] to-[#402fc5] text-white  relative">
        <div className='banner-bg-wrapper p-16'>
            <div className="max-w-7xl mx-auto flex items-center  m-16">
                <div className='w-[67%]'>
                    <h1 className="text-[55px] font-bold leading-[1.1] pb-2">O2.AI Powering <br></br> Smarter Decisions <br></br>Across Your Workflow</h1>
                    <p className="mt-2 text-[26px] mb-6 leading-[1.1]">An O2AI platform that listens and supports <br></br>care teams while accelerating ROI across enterprise <br></br>systems, clinical applications, and shared services.</p>
                    <button onClick={handleExploreClick} className="mt-4 bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-200 font-bold text-[21px]">
                        Explore AI Product
                    </button>
                </div>
                <div className="flex space-x-4 pr-16 mr-16 mt-16">
                    <LoganimationsIconWhite width={160} height={160}/>
                </div>
            </div>
        </div>
        <div className="w-full max-w-4xl mx-auto absolute mx-auto left-0 right-0 bottom-[-300px] ">
                <VideoPlayer src="/video/AISearch6.mp4" poster="/video/homeBannerVedio.png" />
        </div>
    </div>
  );
};

export default HeaderBanner;