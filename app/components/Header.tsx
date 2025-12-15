
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {SearchIcon, ArrowRightIcon, Otwoai} from "./icons"
import { usePathname } from 'next/navigation';
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="o-custome-shoudo relative z-10">
      <div className="w-full max-w-7xl mx-auto  flex items-center justify-between py-4 b-white">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          <Otwoai />
        </Link>
        <nav className="hidden md:flex space-x-3 gap-2 justify-center items-center px-6 navCustomeStyle">
          <Link
            href="/"
            className={`hover:text-blue-600 ${pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`hover:text-blue-600 ${pathname === '/products' ? 'active' : ''}`}
          >
            Products
          </Link>
          <Link
            href="/about"
            className={`hover:text-blue-600 ${pathname === '/about' ? 'active' : ''}`}
          >
            About O2.AI
          </Link>
          <Link
            href="/contact"
            className={`hover:text-blue-600 ${pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
          {/* <div className="bg-[#0975BB] rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <SearchIcon />
          </div> */}
          <a href="/contact" className="bg-[#0975BB] flex text-white p-2 rounded-full gap-2 justify-center items-center px-6 ">
            <span>Request Demo</span>
            <span><ArrowRightIcon /></span>
            
          </a>
        </nav>
        {/* <button className="flex items-center space-x-2">
          <span className="text-gray-700 font-normal">
            Hi
          </span>
        </button> */}
      </div>
    </header>
  )
}