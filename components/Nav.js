import Link  from 'next/link';
import Image from 'next/image';
const Nav = () => {
    return (
    <nav className='w-full p-4 flex gap-3 justify-end items-end border-b-2'>
        <div className='mr-auto '>
        <Image src="/logo.png" width={50} height={50} />
        </div>
        <Link href="/" className='hover:text-sky-600'>Home</Link>
        <Link href="/about" className='hover:text-sky-600' >About</Link>
        <Link href="/forks" className='hover:text-sky-600'>Fork Listing</Link>

    </nav>);
}
export default Nav;