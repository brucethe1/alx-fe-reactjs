import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json'
  }
});

export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return {
      data: response.data,
      error: null,
      loading: false
    };
  } catch (error) {
    return {
      data: null,
      error: 'User not found',
      loading: false
    };
  }
};
