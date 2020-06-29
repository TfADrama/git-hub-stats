import { User } from '../data';
import { Repo } from '../data';

const ParseUsers = (users) => {
  const parsedUsers = [];
  users.forEach((user) => {
    parsedUsers.push(ParseUser(user));
  });

  return parsedUsers;
};

const ParseUser = (user) =>
  User(
    user.id,
    user.login,
    user.avatar_url,
    user.name,
    user.email,
    user.followers
  );

const ParseRepos = (repos) => {
  const parsedRepos = [];
  repos.forEach((repo) => {
    parsedRepos.push(
      Repo(repo.id, repo.name, repo.stargazers_count, repo.description)
    );
  });

  return parsedRepos;
};

export { ParseUsers, ParseRepos, ParseUser };
