import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <h1>Explore the World with TravelTrucks</h1>
      <p>Find the perfect camper for your next adventure.</p>
      <Link to="/catalog">
        <button>View Now</button>
      </Link>
    </div>
  );
}

export default Banner;
