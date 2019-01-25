import { parseDate } from '../../common/helpers';

// TO DO:
// - Slice data up into 5 strings, a random number (forks), and 2 dates

export const mapUserList = ({ users }) =>
  users.map(u => ({
    name: u.display_name,
    username: u.username,
    image: u.avatar_url,
    email: u.email
  }));
