const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

const api = {
  fetchData: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  },
};

export default api;
