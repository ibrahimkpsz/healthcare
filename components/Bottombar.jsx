import { DashboardIcon } from '@radix-ui/react-icons';
import { BarChart, CreditCard } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/dashboard', icon: <DashboardIcon className='w-6 h-6' />, label: 'Dashboard' },
    { href: '/appointments', icon: <BarChart className='w-6 h-6' />, label: 'Appointments' },
    { href: '/doctors', icon: <CreditCard className='w-6 h-6' />, label: 'Doctors' },
];  

function Bottombar() {
    const pathname = usePathname();

    const getLinkClassName = (href) => `p-5 w-full flex flex-col gap-1 items-center transition-all ${pathname === href ? 'text-flat bg-[#202324]' : 'text-[#747475] hover:bg-[#202324] hover:text-flat'}`;

    return (
        <nav className='fixed bottom-0 z-20 flex items-center w-full text-white bg-white'>
            {navLinks.map(({ href, icon, label }) => (
                <Link key={href} className={getLinkClassName(href)} href={href}>
                    {icon}
                    <span className='text-sm font-medium'>{label}</span>
                </Link>
            ))}
        </nav>
    );
}

export default Bottombar;
