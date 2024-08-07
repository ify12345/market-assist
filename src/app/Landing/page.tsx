"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const NavBar = dynamic(() => import('@/components/NavBar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Advantage = dynamic(() => import('@/components/Advantage'), { ssr: false });
const Earning = dynamic(() => import('@/components/Earning'), { ssr: false });
const Innovative = dynamic(() => import('@/components/Innovative'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Faq = dynamic(() => import('@/components/Faq'), { ssr: false });
const GetApp = dynamic(() => import('@/components/GetApp'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Cookie = dynamic(() => import('@/components/Cookie'), { ssr: false });

export default function Landing() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="mt-[9rem]">
        <Hero />
        <Advantage />
        <Earning />
        <Innovative />
        <About/>
        <Faq />
        <GetApp />
        <Footer />
        <Cookie />
      </div>
    </div>
  );
}
