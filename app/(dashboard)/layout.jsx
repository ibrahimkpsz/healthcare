"use client"

import { Inter } from 'next/font/google'
import Sidebar from "@/components/Sidebar";
import "../globals.css";
import { ScrollArea } from '@/components/ui/scroll-area';
import { useEffect, useState } from 'react';
import Bottombar from '@/components/Bottombar';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    return null;
  }

  return (
      <html lang="tr">
        <body className={`${inter.className} 2xl:pt-2 bg-zinc-100 overflow-hidden`}>
          <Provider store={store}>
            <div className="flex min-h-screen">
              {!isMobile && <Sidebar />}
              {isMobile && <Bottombar />}
              <div className="flex flex-col flex-auto min-h-screen overflow-hidden select-none">
                <ScrollArea className="h-screen p-10 bg-white border shadow-sm rounded-tl-xl border-zinc-200">
                  {children}
                </ScrollArea>
              </div>
            </div>
          </Provider>
        </body>
      </html>
  );
}
