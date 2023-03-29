import { Link } from "react-router-dom";
import '../styles/home.css'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <h1>Foodie</h1>
            </div>
            <div className="nav_links">
                <Link to='/home'>Home</Link>
                <Link to='/home/about'>About</Link>
                <Link to='/home/posts'>Foods</Link>
                <Link to='/home/add-posts'>Add Post</Link>
                <Link  className="text-danger" to='/'>Logout</Link>
            </div>
        </div>
     );
}
 
export default Navbar;