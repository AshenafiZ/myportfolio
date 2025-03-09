'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';


const Header = () => {
  return (
    <header className='pt-4 xl:pt-6 pb-2 xl:pb-3 text-white bg-pink-50/20'>
      <div className="container mx-auto flex justify-between  items-center">
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            The Winner<span className='text-accent'>.</span>
          </h1>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Nav />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header