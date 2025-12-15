import React from 'react';
import {LoganimationsIconWhite } from "../../components/icons"
import { useRouter } from 'next/navigation';
import Image from "next/image"
import Breadcrumb from "../../components/Breadcrumb"

const ContactBanner: React.FC = () => {
   const router = useRouter();

  const handleExploreClick = () => {
    router.push('/products');
  };
  return (
    <div className="bg-gradient-to-r from-[#0975BB] to-[#402fc5] text-white  ">
        
        <div className='Product-bg-wrapper pb-10 baaner-hight'>
             <Breadcrumb />
              <div className="max-w-7xl mx-auto flex items-center m-16 justify-center">
                  <div className='text-center'>
                      <h1 className="text-[50px] font-bold leading-[1.1] pb-2">We’re Here to Empower <br></br>Your AI Journey</h1>
                      <p className="mt-2 text-[20px] mb-6 leading-[1.1] opacity-[.77]">Get in touch with O2.AI to discover how we can help you harness <br></br>the power of data, automation, and human insight.</p>
                  </div>
              </div>
        </div>
    </div>
  );
};

export default ContactBanner;