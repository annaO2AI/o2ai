"use client";
import Image from "next/image"
import HomeBanner from "./Homebanner"
import OurAIProducts from "./OurAIProducts";
import Integrations from "./Integrations";
import Testimonials from "./Testimonials";
import BusinessApps from "./BusinessApps";

export default function HomeMain() {

  return (
    <section className="min-h-[600px]">
      {/* banner */}
      <div className="bg-[#00548B]">
        <HomeBanner />
      </div>
      <div className="bg-[#E7ECF6] pt-[280px] ">
          <OurAIProducts />
      </div>
      <div className="bg-[#fff]">
        <BusinessApps />
      </div>
      <Integrations />
      <Testimonials />
    </section>
  );
}