"use client";
import Image from "next/image";
import ProductsBanner from "./ProductsBanner";
import AICallSummary from "./AICallSummary";
import AISearch from "./AISearch"
import ClinicalAIComp from "./ClinicalAI"
import AIOps from "./AIOps"
import EmployeeEnablement from "./EmployeeEnablement";
import FaxAutomationCom from "./FaxAutomation";

export default function HomeMain() {

  return (
    <section className="min-h-[600px]">
          <div className="bg-[#070A40]">
             <ProductsBanner />
           </div>
           <div className="bg-[#fff]">
               <AICallSummary />
           </div>
           <div className="bg-[#EFF6FF]">
              <AISearch />
           </div>
           <div className="bg-[#fff]">
               <ClinicalAIComp />
           </div>
            <div className="bg-[#F8F8FF]">
               <AIOps />
           </div>
            <div className="bg-[#fff]">
               <EmployeeEnablement />
           </div>
           <div className="bg-[#fff] pb-12 pt-12">
               <FaxAutomationCom />
           </div>
    </section>
  );
}