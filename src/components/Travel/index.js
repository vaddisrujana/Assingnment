import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.css";

class Travel extends Component {
  render() {
    return (
      <div>
        <div className="travel-background">
          <h1 className="heading">Travel Where You Want</h1>
          <Link to="/tour">
            <button className="button">Let's Get Start</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Travel;
