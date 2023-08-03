import { Link } from "react-router-dom";
import "./index.css";

const ForthDay = () => (
  <div className="background-container">
    <div className="firstDay-background">
      <h1 className="day1-heading">DAY-4</h1>

      <div className="flex">
        <p className="para">
          Wake up at leisure, have a nice and heavy breakfast while you discuss
          about your experience with your group. Board the designated
          Landcruisers to embark on the journey toNairobi. You would be dropped
          at the JKIA airport. End of services.
        </p>
        <img
          src="https://res.cloudinary.com/dxq7q10cl/image/upload/v1691053313/Picture9_chfqv4.png"
          className="image"
        />
      </div>

      <div className="day-button">
        <Link to="/third-day">
          <button className="day">Back</button>
        </Link>
      </div>
    </div>
  </div>
);

export default ForthDay;
