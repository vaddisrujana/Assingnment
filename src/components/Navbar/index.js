import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => (
  <div className="nav-background">
    <div className="nav-container-1">
      <img
        src="https://res.cloudinary.com/dxq7q10cl/image/upload/v1691044064/Transparent_-_Travel_Unbounded-R_atfmsq.jpg"
        className="logo"
      />
    </div>
    <div className="nav-container-2">
      <ul className="list flex">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Terms-and-conditions">
          <li className="knowUs">Terms & Conditions</li>
        </Link>

        <Link to="/contact">
          <li className="knowUs">Contact Us</li>
        </Link>
      </ul>
      <div>
        <button className="login-button">Login</button>
      </div>
    </div>
  </div>
);

export default Navbar;
