'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';


const Header = () => {
  return (
<<<<<<< HEAD
    <header className='pt-4 xl:pt-6 pb-2 xl:pb-3 text-white bg-pink-50/20'>
      <div className="container mx-auto flex justify-between  items-center">
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            The Winner<span className='text-accent'>.</span>
=======
    <header className='pt-5 xl:pt-7 pb-3 xl:pb-4 text-white bg-primary/90 backdrop-blur-sm sticky top-0 z-30 border-b border-white/5'>
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/' className="group">
          <h1 className='font-display text-2xl xl:text-3xl font-semibold tracking-tight flex items-baseline gap-1'>
            Ashenafi<span className="text-accent group-hover:text-trace transition-colors">.</span>
            <span className="hidden sm:inline text-[11px] font-primary font-normal tracking-[2px] text-white/40 uppercase ml-2">dev / eng</span>
>>>>>>> redesign-and-fixes
          </h1>
        </Link>
        <div className="hidden sm:flex items-center gap-8">
          <Nav />
          <Link href='/contact'>
            <Button className='hidden md:flex'>Hire me</Button>
          </Link>
        </div>
        <div className="sm:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

<<<<<<< HEAD
export default Header
=======
export default Header
>>>>>>> redesign-and-fixes
