import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export const getUserDetails = async (username) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};