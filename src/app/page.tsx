"use client"
import { useEffect } from "react";
import { Navbar, Intro, Summary, Skills, Qualifications, Projects, Footer } from "@/components/index.js";
import ScrollTop from "@/components/ScrollTop";
import initializeAOS from '@/utils/initializeAOS';

export default function Home() {

  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <div className="w-full relative bg-primary">
      <Navbar />
      < >
      
        <Intro />
        <Summary />
        <Skills />
        <Qualifications />
        <Projects />
        <Footer />
      </>
        <ScrollTop/>
    </div>

  );
}
