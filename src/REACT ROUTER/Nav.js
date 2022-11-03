import { Link } from "react-router-dom";
import './NavRouter.css'
function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/About"> 
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/Shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;