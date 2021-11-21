import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dojo Blog</h1>
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
            <Link to="/menu">Menu</Link>
            {/* <Link href="/">Home</Link> */}
            {/* <Link href="/create">New Blog</Link>     */}
        </nav>
     );
}
 
export default Navbar;