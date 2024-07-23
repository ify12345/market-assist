"use client";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Advantage from "@/components/Advantage";
import Earning from "@/components/Earning";
import Innovative from "@/components/Innovative";
import Faq from "@/components/Faq";
import GetApp from "@/components/GetApp";
import Footer from "@/components/Footer";
import Cookie from "@/components/Cookie";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="mt-[9rem]">
      <Hero/>
      <Advantage/>
      <Earning/>
      <Innovative/>
      <Faq/>
      <GetApp/>
      <Footer/>
      <Cookie/>
      </div>
    </div>
  );
}
