"use client";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Advantage from "@/components/Advantage";
import Earning from "@/components/Earning";
import Innovative from "@/components/Innovative";
import Faq from "@/components/Faq";

export default function Landing() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulate an async operation
    setTimeout(() => {
      setLoading(false);
      console.log("Button clicked!");
    }, 2000);
  };

  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero/>
      <Advantage/>
      <Earning/>
      <Innovative/>
      <Faq/>
    </div>
  );
}
