import { Link } from "react-router-dom";

const CamperCard = ({ id, name, price, rating }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <Link to={`/catalog/${id}`}>
        <button>Show More</button>
      </Link>
    </div>
  );
};

export default CamperCard;
