import { Link } from "react-router-dom";
import "./index.css";

const ThirdDay = () => (
  <div className="background-container">
    <div className="firstDay-background">
      <h1 className="day1-heading">DAY-3</h1>

      <div className="flex">
        <p className="para">
          Today is a very busy day for you at Mara. Wake up early, freshen
          yourself, have a hot beverage and jump into your designated vehicles.
          Today you would be going towards the border of Maasai Mara. You would
          be going for a full day game drive with packed breakfast and lunch.
          Sand river is the border for Maasai Mara and Tanzania. This has been
          the entry point of the migratory animals for millions of years. You
          would be amazed to see such a small river separates two different
          countries!! Enjoy every bit your time as this is your last day of game
          drive for this trip. Have lunch and take a small nap like our Maasai
          guides. Then proceed towards your camp. On the way back encounter a
          pride of lion. During your stay at Mara, you would have seen the Big 4
          our of the Big 5. The Rhino being very elusive is going to be a
          difficult find. But this area is know for the Rhinos. If you are lucky
          you would get to see one.
        </p>
        <img
          src="https://res.cloudinary.com/dxq7q10cl/image/upload/v1691053305/Picture8_ehgdrt.png"
          className="image"
        />
      </div>
      <div className="flex">
        <p className="para">
          Return to the camp with great memories. Spend you evening at the camp
          fire before having dinner. Retire for the day. Sadly the holiday has
          come to an end. But at the end you would release that it was the
          journey which was so beautiful. Have a blissful night. ( BLD )
        </p>
      </div>

      <div className="day-button">
        <Link to="/second-day">
          <button className="day">Back</button>
        </Link>
        <Link to="/forth-day">
          <button className="day">Next>></button>
        </Link>
      </div>
    </div>
  </div>
);

export default ThirdDay;
