import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.css";

const FirstDay = () => (
  <div className="background-container">
    <div className="firstDay-background">
      <h1 className="day1-heading">DAY-1</h1>

      <div className="flex">
        <p className="para">
          Our drivers would pick up from the JKIA airport at 7AM. You would
          board our 4*4 Landcruisers to embark on your journey to Maasai Mara.
          The road journey takes about 5 to 6 hours, but you would be amazed by
          the landscape enroute. You would first see the Nairobi national park
          on your left side. On a lucky day, you would also see a White Rhino
          grazing near the fence. Nairobi city has a national park right in its
          heart!! And it is home for Lions, Leopards, White rhinos, gazzelles,
          Giraffes, crowned cranes, and other mammals and birds. This is the
          only city in the World which boasts a National park within the city
          limits.
        </p>
        <img
          src="https://res.cloudinary.com/dxq7q10cl/image/upload/v1691051090/Picture1_oeb1zy.png"
          className="image"
        />
      </div>
      <div className="flex">
        <img
          src="https://res.cloudinary.com/dxq7q10cl/image/upload/v1691051220/Picture2_unh1ha.png"
          className="image"
        />
        <p className="para">
          After one hour you would climb up to The Great Rift Valley. This is
          one priced attraction of Kenya. Formed a millions years back, this
          valley boasts beautiful lakes and escarpments, which provide havens
          for plentiful wildlife. The Great Rift Valley runs for 4,000 miles
          (6,400 kilometers), from Jordan in southwestern Asia to the coast of
          the Indian Ocean in central Mozambique. We suggest you request your
          driver to stop when you are on top and enjoy the views of this
          Nature’s marvel. You would reach Maasai Mara by noon. Complete your
          check in formalities and proceed to lunch. After lunch, you would go
          on your first game drive on the great plains of Maasai Mara!!
        </p>
      </div>
      <div className="flex">
        <p className="para">
          This afternoon, our experienced Maasai guides/drivers would take you
          around the Talek and Topi plains area. There you would find a lot of
          ungulates, antelopes, zebras and also a huge pride of Lions. This
          pride is called the ‘Topi Pride’. Relax, sit back and enjoy God’s
          creations. You would be so excited to see the endless plains of Maasai
          Mara with its dwellers. Return to your camp after 6PM. Refresh
          yourself and head towards the camp fire. Meet up with your group and
          listen to their first day experience at Mara. Share your magical
          experiences with them. Have dinner and retire for the day ( LD )
        </p>

        <img
          src="https://res.cloudinary.com/dxq7q10cl/image/upload/v1691051315/Picture3_pwunna.png"
          className="image"
        />
      </div>

      <div className="day-button">
        <Link to="/overview">
          <button className="day">Back</button>
        </Link>
        <Link to="/second-day">
          <button className="day">Next>></button>
        </Link>
      </div>
    </div>
  </div>
);

export default FirstDay;
