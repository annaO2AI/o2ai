"use client";
import Image from "next/image"
import ContactBanner from "./ContactBanner"
import ContactUs from "./ContactForm"

export default function Contact() {

  return (
    <section className="min-h-[600px]">
      <div className="bg-[#fff]">
        <ContactBanner />
        <div>
          <ContactUs />
        </div>
      </div>

      <div className="bg-[#fff] mb-16 mt-16">
        <Image
          src="/ourOffices.png"
          alt="I Search"
          width={1600}
          height={653}
          className="imagfilter m-auto"
        />
      </div>
    </section>
  );
}