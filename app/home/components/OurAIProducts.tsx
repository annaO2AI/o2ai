import React from 'react';

import {AiCallSummary,AISearch,AIOpsIcon,ClinicalAI,FaxAutomation,EmployeeEnablement, ArrowRightIconLink, IVR} from "./../../components/icons"

const OurAIProducts = () => {
  return (
    <div className="py-12 px-4 pt-16">
      <h2 className="text-[40px] font-bold text-center mt-8 mb-12 o2-title leading-[1.2]">Our AI product to make your <br></br>operations Faster, Safer, and Better</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-lg overEffect">
          <div className="flex items-center  gap-3 mb-4">
            <AiCallSummary />
            <h3 className="text-[24px] font-semibold o2-title mb-2">ServiceDesk AI</h3>
          </div>
          
          <p className="text-gray-600 mb-4">
            ServiceDesk AI captures key points of the calls, emotions, and sentiments from the IVR calls.
          </p>
          <a href="/products" className="text-blue-600 hover:underline flex gap-2 items-center">View Details <ArrowRightIconLink /></a>
        </div>

        <div className="bg-white p-8 rounded-lg overEffect">
          <div className="flex items-center  gap-3 mb-4">
             <ClinicalAI />
            <h3 className="text-[24px] font-semibold o2-title mb-2">ClinicalAI</h3>
          </div>
          <p className="text-gray-600 mb-4">
            AI medical scribes automate clinical documentation and complete the charting for providers and nurses in SOAP format.
          </p>
          <a href="/products" className="text-blue-600 hover:underline flex gap-2 items-center">View Details <ArrowRightIconLink /></a>
        </div>

        <div className="bg-white p-8 rounded-lg overEffect">
          <div className="flex items-center  gap-3 mb-4">
            <FaxAutomation />
            <h3 className="text-[24px] font-semibold o2-title mb-2">Fax Automation</h3>
          </div>
          
          <p className="text-gray-600 mb-4">
            AI Fax automation reads, classifies, and routes faxes automatically, reducing manual work for healthcare staff.  It uses NLP to extract data accurately,  speeding up the workflow.
          </p>
          <a href="/products" className="text-blue-600 hover:underline flex gap-2 items-center">View Details <ArrowRightIconLink /></a>
        </div>


        <div className="bg-white p-8 rounded-lg overEffect">
          <div className="flex items-center  gap-3 mb-4">
            <AIOpsIcon />
            <h3 className="text-[24px] font-semibold o2-title mb-2">AI Ops</h3>
          </div>
          
          <p className="text-gray-600 mb-4">
            AIOps automates and streamlines operational work by analyzing data from various sources and auto-remediates the resolution.
          </p>
          <a href="/products" className="text-blue-600 hover:underline flex gap-2 items-center">View Details <ArrowRightIconLink /></a>
        </div>

        <div className="bg-white p-8 rounded-lg overEffect">
          <div className="flex items-center  gap-3 mb-4">
            <IVR />
            <h3 className="text-[24px] font-semibold o2-title mb-2">IVRAI</h3>
          </div>
          
          <p className="text-gray-600 mb-4">
            AI agentic IVR autonomously understand, converses with, and acts on customer requests, surpassing traditional IVR.
          </p>
          <a href="/products" className="text-blue-600 hover:underline flex gap-2 items-center">View Details <ArrowRightIconLink /></a>
        </div>

        <div className="bg-white p-8 rounded-lg overEffect">
          <div className="flex items-center  gap-3 mb-4">
             <AISearch />
             <h3 className="text-[24px] font-semibold o2-title mb-2">AI Search</h3>
          </div>
         
          <p className="text-gray-600 mb-4">
            AI chatbots streamline recruitment by automating resume screening, sourcing, and scheduling. They quickly identify top candidates for each role.
          </p>
          <a href="/products" className="text-blue-600 hover:underline flex gap-2 items-center">View Details <ArrowRightIconLink /></a>
        </div>
      
      </div>
    </div>
  );
};

export default OurAIProducts;