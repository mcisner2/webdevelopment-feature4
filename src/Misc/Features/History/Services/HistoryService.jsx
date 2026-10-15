export function getHistoryData() {
  const axios = window.axios;

  // GET request to the feature's JSON file using axios
  return axios
    .get("./Features/History/history.json")
    .then((response) => response.data)
    .catch((error) => {
      // Error catching for if the data fails to load
      console.error("Failed to load history data:", error);
      throw error;
    });
}

// TODO: add a getByCategory(category) method if we want a category