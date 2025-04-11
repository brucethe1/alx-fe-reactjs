import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json'
  }
});

export const searchUsers = async ({ username, location, reposMin, reposMax, followersMin }) => {
  try {
    let query = username ? `${username} in:login` : '';
    if (location) query += ` location:${location}`;
    if (reposMin) query += ` repos:>=${reposMin}`;
    if (reposMax) query += ` repos:<=${reposMax}`;
    if (followersMin) query += ` followers:>=${followersMin}`;

    const response = await githubApi.get(`/search/users?q=${query}&per_page=10`);
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
