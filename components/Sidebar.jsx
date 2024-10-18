"use client"

import { DashboardIcon } from '@radix-ui/react-icons';
import { BarChart, CreditCard, HeartPulse } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ScrollArea } from './ui/scroll-area';

const navLinks = [
    { href: '/dashboard', icon: <DashboardIcon className='w-4 h-4' />, label: 'Dashboard' },
    { href: '/appointments', icon: <BarChart className='w-4 h-4' />, label: 'Appointments' },
    { href: '/doctors', icon: <CreditCard className='w-4 h-4' />, label: 'Doctors' },
];

function Sidebar() {
    const pathname = usePathname();

    const getLinkClassName = (href) => `flex items-center gap-2.5 px-4 py-2 text-black rounded-lg ${pathname === href ? 'bg-white border border-zinc-100 shadow-sm ' : ''}`;

    return (
        <ScrollArea className="h-screen overflow-visible">
            <nav className='static top-0 left-0 z-20 flex-shrink-0 block h-auto px-5 text-white select-none w-80'>
                <div className='flex items-center gap-2 py-5 text-lg font-bold text-cyan-600'>
                    <HeartPulse size={20} />
                    Healthcare Dashboard
                </div>
                <hr />
                <div className='flex flex-col gap-3 my-5'>
                    {navLinks.map(({ href, icon, label }) => (
                        <Link className={getLinkClassName(href)} key={href} href={href}>
                            <div className='flex items-center gap-2.5'>
                                {icon}
                                <span className='text-sm font-medium'>{label}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </nav>
        </ScrollArea>
    );
}

export default Sidebar;
