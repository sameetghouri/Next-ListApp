"use client";
import Link  from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';
import { usePathname } from 'next/navigation';
const Nav = () => {
    const path = usePathname();
    return (
    <nav className='w-full mb-4 p-3 flex gap-4 justify-end items-end border-b-2'>
        <div className='mr-auto'>
        <Image src="/logo.png" alt='logo' width={60} height={60} />
        </div>
        
    </nav>);
}
export default Nav;