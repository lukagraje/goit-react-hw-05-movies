import axios from "axios";

const apiKey = "f0f14a5f216d62f88cc23b7ee7134bc6";
const baseURL = "https://api.themoviedb.org/3";

const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${baseURL}/trending/movie/day?api_key=${apiKey}`,
    );

    return response.data;
  } catch (error) {
    console.log("Fatal error:", error);
    throw error;
  }
};

const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${baseURL}/search/movie?api_key=${apiKey}&query=${query}`,
    );
    return response.data;
  } catch (error) {
    console.log("Fatal error:", error);
    throw error;
  }
};

const getMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `${baseURL}/movie/${movieId}?api_key=${apiKey}`,
      );
      return response.data;
    } catch (error) {
      console.log("Fatal error:", error);
      throw error;
    }
}

const getMovieCredits = async (movieId) => {
    try {
      const response = await axios.get(
        `${baseURL}/movie/${movieId}/credits?api_key=${apiKey}`,
      );
      return response.data;
    } catch (error) {
      console.log("Fatal error:", error);
      throw error;
    }
}


const getMovieReviews = async (movieId) => {
    try {
      const response = await axios.get(
        `${baseURL}/movie/${movieId}/reviews?api_key=${apiKey}`,
      );
      return response.data;
    } catch (error) {
      console.log("Fatal error:", error);
      throw error;
    }
}

export {
    fetchTrendingMovies,
    searchMovies,
    getMovieCredits,
    getMovieReviews,
    getMovieDetails,
}