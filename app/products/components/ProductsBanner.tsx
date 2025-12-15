import React from 'react';
import {LoganimationsIconWhite } from "../../components/icons"
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Breadcrumb from "./../../components/Breadcrumb";
import VideoPlayer from './../../components/VideoPlayer';

const ProductsBanner: React.FC = () => {
   const router = useRouter();

  const handleExploreClick = () => {
    router.push('/products');
  };
  return (
    <div className="bg-gradient-to-r from-[#0975BB] to-[#402fc5] text-white  ">
        
        <div className='Product-bg-wrapper pb-10 baaner-hight'>
             <Breadcrumb />
              <div className="max-w-7xl mx-auto flex items-center m-16 mt-8">
                  <div className='w-[60%]'>
                      <h1 className="text-[50px] font-bold leading-[1.1] pb-2">AI-Driven Insights Meet <br></br> Enterprise-Grade Automation</h1>
                      <p className="mt-2 text-[24px] mb-6 leading-[1.1]">Powered by the O2AI platform.</p>
                  </div>
                  <div className="flex space-x-4">
                      {/* <Image
                          src="/product-video.png"
                          alt="I Search"
                          width={631}
                          height={653}
                          className="imagfilter m-auto"
                      /> */}
                      <VideoPlayer src="/video/AISearch6.mp4" poster="/product-video.png" />
                  </div>
              </div>
        </div>
    </div>
  );
};

export default ProductsBanner;