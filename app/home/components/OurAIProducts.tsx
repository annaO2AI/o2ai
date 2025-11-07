import React from 'react';

import {AiCallSummary,AISearch,AIOpsIcon,ClinicalAI,FaxAutomation,EmployeeEnablement, ArrowRightIconLink} from "./../../components/icons"

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
            ServiceDesk AI automatically captures key points, emotions, and sentiments from IVR calls. It integrates with ServiceNow and can be customized to export PDFs to other applications.
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
        <div className="bg-white p-8 rounded-lg overEffect">
          <div className="flex items-center  gap-3 mb-4">
            <AIOpsIcon />
            <h3 className="text-[24px] font-semibold o2-title mb-2">AI Ops</h3>
          </div>
          
          <p className="text-gray-600 mb-4">
            AIOps stands for Artificial Intelligence for IT Operations and is the strategic use of AI and machine learning (ML) to automate and streamline IT...
          </p>
          <a href="/products" className="text-blue-600 hover:underline flex gap-2 items-center">View Details <ArrowRightIconLink /></a>
        </div>
        <div className="bg-white p-8 rounded-lg overEffect">
          <div className="flex items-center  gap-3 mb-4">
             <ClinicalAI />
            <h3 className="text-[24px] font-semibold o2-title mb-2">ClinicalAI</h3>
          </div>
          <p className="text-gray-600 mb-4">
            AI Medical Scribe automates clinical documentation, reduces admin work and EHR enhancing patient care. It integrates with EHR and ICD-10, securely storing data per HIPAA standards on the client&apos;s cloud.
          </p>
          <a href="/products" className="text-blue-600 hover:underline flex gap-2 items-center">View Details <ArrowRightIconLink /></a>
        </div>
        <div className="bg-white p-8 rounded-lg overEffect">
          <div className="flex items-center  gap-3 mb-4">
            <EmployeeEnablement />
            <h3 className="text-[24px] font-semibold o2-title mb-2">Employee Enablement</h3>
          </div>
          
          <p className="text-gray-600 mb-4">
            A single AI-powered interface centralizes insights across Finance, HR, Claims, and more, simplifying data access. It streamlines reporting, boosts productivity, and reduces costs by eliminating multiple platforms.
          </p>
          <a href="/products" className="text-blue-600 hover:underline flex gap-2 items-center">View Details <ArrowRightIconLink /></a>
        </div>
        <div className="bg-white p-8 rounded-lg overEffect">
          <div className="flex items-center  gap-3 mb-4">
            <FaxAutomation />
            <h3 className="text-[24px] font-semibold o2-title mb-2">Fax Automation</h3>
          </div>
          
          <p className="text-gray-600 mb-4">
            AI Fax Automation reads, classifies, and routes faxes automatically, reducing manual work for healthcare staff. It uses NLP to extract data accurately, speeding up workflows and improving patient communication.
          </p>
          <a href="/products" className="text-blue-600 hover:underline flex gap-2 items-center">View Details <ArrowRightIconLink /></a>
        </div>
      </div>
    </div>
  );
};

export default OurAIProducts;