import Link  from 'next/link';
import Image from 'next/image';
const Nav = () => {
    return (
    <nav className='w-full mb-4 p-4 flex gap-3 justify-end items-end border-b-2'>
        <div className='mr-auto '>
        <Image src="/logo.png" alt='logo' width={50} height={50} />
        </div>
        <Link href="/" className='hover:text-sky-600'>Home</Link>
        <Link href="/about" className='hover:text-sky-600' >About</Link>
        <Link href="/forks" className='hover:text-sky-600'>Fork Listing</Link>

    </nav>);
}
export default Nav;