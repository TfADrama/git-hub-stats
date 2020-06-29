import axios from 'axios';
import {
  LIST_USERS_ENDPOINT,
  USER_REPOSITORY_ENDPOINT,
  SEARCH_USERS_ENDPOINT,
} from './endpoints';
import { ParseUsers, ParseUser } from './parsers';
/**
 * Fetches for the most followed users
 * @param {number} limit number of users to retrieve on the first chunk
 * @returns {Array} array of GitHub users,
 *
 * @throws Unexpected errors may occur while fetching users.
 */
export const fetchPopularUsers = async (limit = 10) => {
  const configure = {
    params: {
      per_page: limit,
      q: 'followers:>1000',
      page: 1,
      sort: 'followers',
      order: 'desc',
    },
  };

  const { data } = await axios.get(SEARCH_USERS_ENDPOINT, configure);
  return ParseUsers(data.items);
};

/**
 * Fetches the details of the user with a given username.
 *
 * @param {string} username username to search
 * @returns {object}
 * @throws Unexpected errors may occur while fetching users.
 */
export const fetchUser = async (username: string) => {
  const getUserEndpoint = `${LIST_USERS_ENDPOINT}/${username}`;

  const response = await axios.get(getUserEndpoint);
  const data = response.data;

  return ParseUser(data);
};

/**
 * Fetches the repository list of the user with a given username.
 *
 * @param {string} username username to search
 * @returns {object}
 * @throws Unexpected errors may occur while fetching users.
 */
export const fetchUserRepositories = async (username: string) => {
  const getUserEndpoint = `${LIST_USERS_ENDPOINT}/${username}${USER_REPOSITORY_ENDPOINT}`;

  const { data } = await axios.get(getUserEndpoint);
  return data;
};
