import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { HeartPulse } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Header = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#" }
  ];
  return (
    <header className="fixed z-20 w-full p-5 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-screen-2xl">
        <div className='flex items-center gap-2 text-xl font-bold text-cyan-600'>
          <HeartPulse />
          Healthcare
        </div>
        <div className="items-center hidden gap-5 md:flex">
          {links.map((link) => (
            <Link key={link.name} className='font-medium' href={link.link}>{link.name}</Link>
          ))}
        </div>
        <div className='flex items-center gap-3'>
          <SignedOut>
            <Button asChild variant="ghost">
              <SignInButton>Sign in</SignInButton>
            </Button>
          </SignedOut>
          <Button asChild variant="outline">
            <Link href="/appointment">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header