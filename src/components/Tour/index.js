import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.css";

const Tour = () => (
  <div>
    <div className="tour-background">
      <div className="tour-container">
        <h1 className="tour-heading">Big Cats Week at Maasai Mara</h1>
        <Link to="/overview">
          <button className="booknow-button">Book Now</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Tour;
