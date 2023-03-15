import Link  from 'next/link';
const Nav = () => {
    return (
    <nav className='my-4 mx-8 p-4 flex justify-end align-bottom border-b-2'>
        <div>
        <h1>Fork List</h1>
        </div>
        <Link href="/" >Home</Link>
        <Link href="/about" >About</Link>
        <Link href="/forks" >Fork Listing</Link>

    </nav>);
}
export default Nav;