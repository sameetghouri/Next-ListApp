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
        <Link href="/" className={`${path==="/" ? "text-sky-600 font-semibold" : "hover:text-sky-600 font-semibold"}`}>Home</Link>
        <Link href="/about" className={`${path==="/about" ? "text-sky-600 font-semibold" : "hover:text-sky-600 font-semibold"}`} >About</Link>
        <Link href="/forks" className={`${path==="/forks" ? "text-sky-600 font-semibold" : "hover:text-sky-600 font-semibold"}`}>Fork Listing</Link>
        <Link href="/courses" className={`${path==="/courses" ? "text-sky-600 font-semibold" : "hover:text-sky-600 font-semibold"}`}>Courses</Link>
        <Link href="/reduxtoolkit" className={`${path==="/reduxtoolkit" ? "text-sky-600 font-semibold" : "hover:text-sky-600 font-semibold"}`}>Redux Toolkit</Link>

    </nav>);
}
export default Nav;