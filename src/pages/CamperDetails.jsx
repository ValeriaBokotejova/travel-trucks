import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCamperDetails } from "../services/api";

const CamperDetails = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    const getCamperDetails = async () => {
      const data = await fetchCamperDetails(id);
      setCamper(data);
    };

    getCamperDetails();
  }, [id]);

  if (!camper) return <p>Loading...</p>;

  return (
    <div>
      <h2>{camper.name}</h2>
      <p>{camper.description}</p>
      <p>Price: ${camper.price}</p>
      {/* More camper details */}
    </div>
  );
};

export default CamperDetails;
