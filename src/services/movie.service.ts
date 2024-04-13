import axios from "axios";

export const getMovies = async () => {
  const response = await axios.get(
    "https://wefit-movies.vercel.app/api/movies"
  );
  return response.data.products;
};
