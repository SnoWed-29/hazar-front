

const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

export const fetchDataFromApi = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
