import { User } from '../data';
import { Repo } from '../data';

const ParseUsers = (users) => {
  const parsedUsers = [];
  users.forEach((user) => {
    parsedUsers.push(User(user.id, user.avatar_url, user.login));
  });

  return parsedUsers;
};

const ParseRepos = (repos) => {
  const parsedRepos = [];
  repos.forEach((repo) => {
    parsedRepos.push(
      Repo(repo.id, repo.name, repo.stargazers_count, repo.description)
    );
  });

  return parsedRepos;
};

export { ParseUsers, ParseRepos };
