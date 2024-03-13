'use client'
 
import React from 'react'
import About from 'src/components/layout/About';
import Footer from 'src/components/layout/Footer'
import Hero from 'src/components/layout/Hero';
import Projects from 'src/components/layout/Projects';
import Services from 'src/components/layout/Services';
import BurgerMenu from 'src/components/navigation/menu/BurgerMenu';
import Navbar from 'src/components/navigation/menu/Navbar';
import { GlobalStateProvider } from '../contexts/GlobalStateContext';

export function Client() {
  return (
      <GlobalStateProvider>
    {/* // <div className="scroll-auto	h-screen overflow-y-auto"> */}
    <BurgerMenu />
    <Navbar />
    <Hero />
    <About /> 
    <Projects />
    <Services />
    <Footer /> 
  {/* // </div> */}
  </GlobalStateProvider>)
}

export default Client;