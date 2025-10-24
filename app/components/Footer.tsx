
"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {LoganimationsIcon, LocationIcon, FacebookIcon, TwitterIcon, LinkedinIcon, LoganimationsIconWhite } from "./icons"

export default function Footer() {
  const pathname = usePathname()
  
  return (
    <footer className="bg-[#020425]">
      <div className="bg-[#0975BB]">
        <div className=" px-4 flex items-center  justify-center subscrib m-auto">
          <div className="subscrib-img">
            <Image
            src="/SubscribetoOur.png"
            alt="I Search"
            width={450}
            height={653}
            className="imagfilter m-auto"
          />
          </div>
          <div className="">
            <h3 className="text-[#fff] text-[34px]">
              Subscribe to our newsletter for the<br></br> latest updates and insights.
            </h3>
            <div className="flex w-[350px]">
              <input
                  id="price"
                  name="price"
                  type="text"
                  placeholder="@ Enter your email"
                  className=" rounded-tl-full rounded-bl-full block min-w-0 grow bg-[#545CDB] py-1.5 pr-3 pl-4 text-base text-white placeholder:text-white focus:outline-none sm:text-sm/6"
                />
              <button className="bg-white text-[#282828] p-3 rounded-tr-full rounded-br-full px-6 text-[18px] font-bold">
                Subscribe
              </button>
            </div>
            <div className="text-[#fff] text-[16px] pt-3">Stay ahead with the latest updates, insights, and <br></br>events from O2.AI</div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 flex items-top justify-between gap-3 py-12">
        <div className="w-[40%]">
          <div className="mb-3" >
            <LoganimationsIconWhite />
          </div>
          <div className="text-white w-[80%] opacity-[.67]">
            At O2.AI, we harness AI to elevate human potential and well-being. We transform healthcare with intelligent, human-centered innovation. By turning data into insight, we drive smarter, faster outcomes.
          </div>
        </div>

        <div className="w-[20%]">
          <h3 className="text-white mb-2 text-[18px] font-bold">General</h3>
          <ul className="opacity-[.67]">
            <li className="text-white font-normal mb-2">
              <a href="/"> Home</a>
            </li>
            <li className="text-white font-normal mb-2">
              <a href="/products">
                Products
              </a>
            </li>
             <li className="text-white font-normal mb-2">
              <a href="/about">About O2.AI  </a>
            </li>
            <li className="text-white font-normal mb-2">
              <a href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="w-[20%]">
          <h3 className="text-white mb-2 text-[18px] font-bold">Products</h3>
          <ul className="opacity-[.67]">
            <li className="text-white font-normal mb-2"> <a href="/products">AI Call Summary</a></li>
            <li className="text-white font-normal mb-2"> <a href="/products">AI Search</a></li>
            <li className="text-white font-normal mb-2"> <a href="/products">AI Ops</a></li>
            <li className="text-white font-normal mb-2"> <a href="/products">AI Finder</a></li>
            <li className="text-white font-normal mb-2"> <a href="/products">AI Fax Automation </a></li>
          </ul>
        </div>

        <div className="w-[20%]">
          <h3 className="text-white text-[18px] font-bold mb-2">Get in Touch</h3>
          <div className="flex gap-3">
            <div>
              <LocationIcon />
            </div>
            <div className="text-white opacity-[.67]">
              10080 N Wolfe Rd SW3 200 Cupertino, CA 95014, United States
            </div>
          </div>

          <div className="flex gap-3 mt-3">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#3A86FF" />
              </svg>
            </div>
            <div className="text-white opacity-[.67]">
              ConnectwithUS@o2aicorp.com
            </div>
          </div>

          <div className="flex gap-3 mt-3">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#3A86FF" />
              </svg>
            </div>
            <div className="text-white opacity-[.67]">
              (415) 869-5779
            </div>
          </div>

        </div> 
      </div>
      <div className="bg-[#161D5D]">
          <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between gap-3 p-6" >
                <div className="text-white text-[14px] font-normal opacity-[.67]">O2.AI</div>
                <div className="text-white text-[14px] font-normal opacity-[.67]">© 2025 O2.AI. All rights reserved.</div>
                <div className="flex gap-4 items-center justify-center">
                  <FacebookIcon />
                  {/* <TwitterIcon /> */}
                  <LinkedinIcon />
                </div>
          </div>
      </div>
    </footer>
  )
}