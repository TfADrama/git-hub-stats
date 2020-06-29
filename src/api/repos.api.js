import axios from 'axios';
import { SEARCH_REPOS_ENDPOINT } from './endpoints';
import { ParseRepos } from './parsers';

/**
 * Fetches for the last year repositories with the most stars
 * @param {number} limit number of repos to retrieve on the first chunk
 * @returns {Array} array of GitHub repositories,
 *
 * @throws Unexpected errors may occur while fetching users.
 */
export const fetchTopYearStarRepos = async (limit = 10, year = 2019) => {
  const configure = {
    params: {
      per_page: limit,
      q: `created:${year}-01-01..${year + 1}-01-01`, //+stars:>100`
      page: 1,
      sort: 'stars',
      order: 'desc',
    },
  };

  const { data } = await axios.get(SEARCH_REPOS_ENDPOINT, configure);
  return ParseRepos(data.items);
};
