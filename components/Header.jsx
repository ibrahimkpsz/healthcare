import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { HeartPulse } from 'lucide-react';
import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className="fixed z-20 w-full p-5 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-screen-2xl">
        <div className='flex items-center gap-2 text-xl font-bold text-cyan-600'>
          <HeartPulse />
          Healthcare
        </div>
        <div className='flex items-center gap-3'>
          <SignedOut>
            <Button asChild variant="ghost">
              <Link href="/signin">Sign in</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button asChild variant="ghost">
              <SignOutButton>Log out</SignOutButton>
            </Button>
          </SignedIn>
          <Button asChild variant="outline">
            <Link href="/appointment">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header