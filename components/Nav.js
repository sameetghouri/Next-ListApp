import Link  from 'next/link';
const Nav = () => {
    return (
    <nav className='w-full my-4 mx-8 p-4 flex gap-3 justify-end align-bottom border-b-2'>
        <div className='mr-auto font-bold text-xl'>
        <h1>Fork List</h1>
        </div>
        <Link href="/" className='hover:text-sky-600'>Home</Link>
        <Link href="/about" className='hover:text-sky-600' >About</Link>
        <Link href="/forks" className='hover:text-sky-600'>Fork Listing</Link>

    </nav>);
}
export default Nav;