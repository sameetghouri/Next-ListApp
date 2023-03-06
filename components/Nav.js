import { Link } from 'next/link';
const Nav = () => {
    return (<nav>
        <div>
        <h1>Fork List</h1>
        </div>
        <Link href="/" >Home</Link>
        <Link href="/about" >About</Link>
        <Link href="/forks" >Fork Listing</Link>

    </nav>);
}
export default Nav;