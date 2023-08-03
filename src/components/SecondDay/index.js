import { Link } from "react-router-dom";
import "./index.css";

const SecondDay = () => (
  <div className="background-container">
    <div className="firstDay-background">
      <h1 className="day1-heading">DAY-2</h1>

      <div className="flex">
        <p className="para">
          Wake up early. Freshen yourself and head to the restaurant for a hot
          cup of coffee or tea. The mornings are cold at Mara, so do wear your
          fleece jacket for the morning game drive. Breakfast would be packed
          for you. Explore the mornings at Mara. The Sunrise you witness at Mara
          is something which you would never get to witness anywhere in the
          World. Just pray that it does not rain!!
        </p>
        <img
          src="https://res.cloudinary.com/dxq7q10cl/image/upload/v1691053078/Picture4_r1slg4.png"
          className="image"
        />
      </div>
      <div className="flex">
        <img
          src="https://res.cloudinary.com/dxq7q10cl/image/upload/v1691053272/Picture6_b8r4yf.png"
          className="image"
        />
        <p className="para">
          Our guides would park the vehicle under a tree for you to have a bush
          breakfast. This is an out of the World experience. At a distance you
          can see the animals peacefully grazing while you are enjoying your
          food. Post your breakfast, proceed again on the game drive. Mid
          mornings while the Lions sleep is a good time to look around for the
          cheetahs. November is also the season when the Topis give birth to
          young ones. On a lucky day, you might witness a Topi giving birth to a
          little one. Keep a watch on the hyenas as they would always be around
          a pregnant Topi!
        </p>
      </div>
      <div className="flex">
        <p className="para">
          Return to your camp around 11.30AM. Take a nice shower and some much
          needed rest. Lunch would be served from 12.30 Noon. Have a hot lunch
          and a short nap. The afternoon game drive would start at 3PM. Today
          our drivers would try and locate a leopard for you.Do ask your driver
          to stop where ever you want to click pictures. Return to the camp post
          sunset and enjoy your evening at the camp fire with your group. Have
          dinner and retire early as you have a full day game drive tomorrow.
        </p>

        <img
          src="https://res.cloudinary.com/dxq7q10cl/image/upload/v1691053281/Picture7_wlxkkb.png"
          className="image"
        />
      </div>

      <div className="day-button">
        <Link to="/first-day">
          <button className="day">Back</button>
        </Link>
        <Link to="/third-day">
          <button className="day">Next>></button>
        </Link>
      </div>
    </div>
  </div>
);

export default SecondDay;
