import React from 'react';
import Image from "next/image"

const Integrations = () => {
  return (
    <div className="bg-gradient-to-r from-[#0975BB] to-purple-800 IntegrationsSection ">
       <div className='flex items-center justify-center max-w-7xl mx-auto py-16 gap-16 justify-between'  >
            <div className="text-left text-white w-[60%]">
                <h1 className="text-4xl font-bold mb-4 text-[16px] text-[#BEB5FF]">INTEGRATIONS</h1>
                <h2 className="text-2xl mb-6 text-[55px] leading-[1.1] font-bold">Seamlessness Technology integrations with tools</h2>
                <p className="text-lg mb-4 text-[20px] w-[70%]">
                    O2.AI works with leading tools such as Python, Docker, Databricks, Servicenow, Azure and Azure SQL, streamlining your workflow for enhanced efficiency and productivity.
                </p>
            </div>
            <div className='w-[40%]'>
                  <Image
                      src="/integrations.svg"
                      alt="I Search"
                      width={623}
                      height={623}
                      className="imagfilter m-auto"
                  />
            </div>
       </div>
    </div>
  );
};

export default Integrations;