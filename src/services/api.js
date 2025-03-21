import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = async (filters = {}) => {
  try {
    const { data } = await axios.get(API_URL, { params: filters });
    console.log("Fetched campers:", data);
    return data;
  } catch (error) {
    console.error("Error fetching campers:", error);
    return [];
  }
};

export const fetchCamperDetails = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching camper details:", error);
    return null;
  }
};
