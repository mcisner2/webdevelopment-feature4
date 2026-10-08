export function getData() {
  const axios = window.axios;
  return axios.get("./Signs/signData.json").then((response) => response.data);
}

export function labelToLetter(label) {
  // Use 65 to represent "A" in ASCII
  return String.fromCharCode(65 + label);
}

// Note: no need for headers since we are not handling
// an API get request and instead, a JSON payload
