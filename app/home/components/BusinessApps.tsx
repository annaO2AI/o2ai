import React from 'react';
import Image from "next/image"

const BusinessApps = () => {
  return (
    <div className=" flex items-center justify-center py-16 my-16">
      <div className="text-center">
        <h2 className="font-bold text-[40px] o2-title">Built for Your Existing Tech Stack</h2>
        <h4 className="mb-4 text-[26px] o2-title mb-6">Integrate seamlessly. Extend capabilities. Scale effortlessly.</h4>
        <div className="flex flex-wrap justify-center space-x-4 space-y-4">
         <Image
            src="/Powerful integrations.png"
            alt="I Search"
            width={770}
            height={138}
            className="imagfilter m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessApps;