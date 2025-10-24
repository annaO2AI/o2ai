"use client"
import { useState } from "react"
import About from "./About"


export default function Layout() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
      <About />
    </div>
  )
}
