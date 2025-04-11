export const searchUsers = async (query) => {
  try {
    const response = await githubApi.get(`/search/users?q=${query}`);
    return response.data.items; // Array of users
  } catch (error) {
    console.error("Search failed:", error);
    return []; // Return empty array on error
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data; // User object
  } catch (error) {
    console.error("Fetch failed:", error);
    return null; // Return null on error
  }
};
