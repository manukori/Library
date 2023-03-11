import {Link} from "react-router-dom"
import "../styles/navbar.css"
const Navbar = () => {
    return ( 
    <div className="navbar">
        <div className="logo">
            <img src="https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/icons/main-logo-green.svg" alt="" />
            <h1>Greenwich Library</h1>
        </div>
        <div className="Links">
            <ul>
                <li><Link to="/admin">HOME</Link></li>
                <li><Link to="/book-list">BOOK LIST</Link></li>
                <li><Link to="/add-book">ADD BOOK</Link></li>
                <li><Link to="/user-list">USER LIST</Link></li>
                <li><Link to="/add-user">ADD USER</Link></li>
                <li><Link to="/">LOGOUT</Link></li>
            </ul>
        </div>
    </div> 
    );
}
 
export default Navbar;