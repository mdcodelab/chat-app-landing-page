import React, { useEffect } from "react";
import Lenis from 'lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header1 from "./components/Header/Header1";
import Navbar from "./components/Navbar/Navbar";
import { Features } from "./components/Features/Features";
import Download from "./components/Download/Download";
import Pricing from "./components/Pricing/Pricing";
import Why from "./components/Why/Why";
import Sidebar from "./components/Sidebar/Sidebar";
import Layer from "./components/Layer/Layer";
import Community from "./components/Community/Community";
import { SidebarProvider } from "../src/useContext"



const App = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100
    });

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (

    <SidebarProvider>
    <div className="container">
    <Layer></Layer>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
      <Header1 />
      <Features />
      <Download></Download>
      <Pricing></Pricing>
      <Community></Community>
      <Why></Why>
    </div>
    </SidebarProvider>
  );
};

export default App;


