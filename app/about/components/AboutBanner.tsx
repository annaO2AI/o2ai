import React from 'react';
import {LoganimationsIconWhite } from "../../components/icons"
import { useRouter } from 'next/navigation';
import Image from "next/image"
import Breadcrumb from "../../components/Breadcrumb"

const AboutBanner: React.FC = () => {
   const router = useRouter();

  const handleExploreClick = () => {
    router.push('/products');
  };
  return (
    <div className="bg-gradient-to-r from-[#0975BB] to-[#402fc5] text-white  ">
        <div className='about-bg-wrapper pb-10 baaner-hight'>
             <Breadcrumb />
              <div className="max-w-7xl mx-auto flex items-center m-16 mt-[90px]">
                  <div className='w-[70%]'>
                      <h1 className="text-[50px] font-bold leading-[1.1] pb-2">The Brain Behind <br></br>Progressive AI</h1>
                      <p className="mt-2 text-[24px] mb-6 leading-[1.1]">Insight-driven automation, powered at<br></br> scale by the O2AI platform.</p>
                  </div>
                  <div className="flex space-x-4">
                     <LoganimationsIconWhite width={140} height={140} />
                  </div>
              </div>
        </div>
    </div>
  );
};

export default AboutBanner;