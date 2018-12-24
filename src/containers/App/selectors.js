import { parseDate } from '../../common/helpers';

export const mapUserList = ({ users }) =>
  users.map(u => ({
    name: u.display_name,
    username: u.username,
    image: u.avatar_url,
    email: u.email
  }));

export const mapRepoList = ({ repositories }) => {
  const now = new Date();
  now.setMonth(now.getMonth() - 1);
  if (now.getDate() >= 28) now.setDate(28);
  return repositories
    .map(r => ({
      createdAt: parseDate(r.CreatedAt),
      updatedAt: parseDate(r.UpdatedAt),
      name: r.FullName,
      shortName: r.Name,
      description: r.Description || 'No description provided.',
      language: r.Language,
      size: parseInt(r.Size, 10) || 0,
      forks: parseInt(r.ForksCount, 10) || 0
    }))
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .takeUntil(r => r.updatedAt < now);
};
