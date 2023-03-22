import Link  from 'next/link';
import Image from 'next/image';
const Nav = () => {
    return (
    <nav className='w-full mb-4 p-3 flex gap-4 justify-end items-end border-b-2'>
        <div className='mr-auto'>
        <Image src="/logo.png" alt='logo' width={60} height={60} />
        </div>
        <Link href="/" className='hover:text-sky-600 font-semibold'>Home</Link>
        <Link href="/about" className='hover:text-sky-600 font-semibold' >About</Link>
        <Link href="/forks" className='hover:text-sky-600 font-semibold'>Fork Listing</Link>

    </nav>);
}
export default Nav;