import { Link } from "react-router-dom";
import "./index.css";

const Overview = () => (
  <div className="background1">
    <div className="overView-background">
      <h1 className="overview-heading">Overview</h1>
      <p className="overview-para">
        November is one of the Best times to visit Kenya, especially to visit
        its prime park, Maasai Mara. This is because the large migratory herds
        would have returned to Tanzania and now the Big cats have to venture
        long distances to hunt their prey. November is also the season of short
        rains. This makes the plains of Maasai Mara lush green. The skies are
        truly dramatic and colourful. The Sun rise and Sun sets during November
        at Mara is simply breath taking. November is also a time for holidaying
        and getting together with our families. And the icing on the cake is we
        have curated this itinerary for such an affordable costs without
        compromising on any of the services. This is commemorate our first year
        anniversary of opening up operations at Nairobi. Join us on this
        unforgettable journey of your life time.
      </p>
      <Link to="/tour">
        <button className="day">Back</button>
      </Link>
      <Link to="/first-day">
        <button className="day">Next>></button>
      </Link>
    </div>
  </div>
);

export default Overview;
