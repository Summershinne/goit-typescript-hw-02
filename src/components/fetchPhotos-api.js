import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotos = async (searchQuery, currentPage) => {
    const response = await axios.get("/search/photos", {
        params: {
            client_id: "ok8qcxGX7VykPdh0LxSYyX3ZI3k4hoB9GBdNf5u5K0A",
            query: searchQuery,
            per_page: 10,
            page: currentPage,
        }
    });
    return response.data.results;
}