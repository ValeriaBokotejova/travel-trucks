import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCampers } from "../redux/camperSlice";
import CamperCard from "../components/CamperCard/CamperCard";
import Filter from "../components/Filter/Filter";
import Loader from "../components/Loader/Loader";

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.campers);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    dispatch(loadCampers(filters));
  }, [filters, dispatch]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (status === "loading") return <Loader />;

  if (status === "failed") return <p>Error loading campers.</p>;

  if (!Array.isArray(items)) return <p>Invalid data format for campers.</p>;

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <div className="catalog">
        {items.map((camper) => (
          <CamperCard key={camper.id} {...camper} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
