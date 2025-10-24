"use client";

import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer"

export default function LayoutWrapper({ children }: { children: ReactNode }) {

  return (
    <div className=" min-h-screen overflow-hidden">
      <Header />
      <main className="MainChilder">
        {children}
      </main>
      <Footer />
    </div>
  );
}