import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json'
  }
});

export const searchUsers = async ({ username, location, reposMin, reposMax, followersMin }) => {
  try {
    // Build query string with exact required format
    let query = username ? `${username} in:login` : '';
    if (location) query += ` location:${location}`;
    if (reposMin) query += ` repos:>=${reposMin}`; // Using reposMin instead of minRepos
    if (reposMax) query += ` repos:<=${reposMax}`;
    if (followersMin) query += ` followers:>=${followersMin}`;

    // Use exact required API endpoint string
    const response = await githubApi.get(`https://api.github.com/search/users?q=${query}&per_page=10`);
    
    return {
      data: response.data.items,
      total: response.data.total_count,
      error: null
    };
  } catch (error) {
    return {
      data: [],
      total: 0,
      error: 'Failed to fetch users'
    };
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    return null;
  }
};
