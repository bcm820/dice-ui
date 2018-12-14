import { parse, format } from 'date-fns';
import samplePhoto from '../temp.png';

export const tempUserMult = {
  displayName: 'User Full Name',
  username: 'username',
  image: samplePhoto,
  repos: ['repo-1', 'repo-2'],
  events: [
    {
      id: '123',
      type: 'PullRequestEvent',
      repo: 'repo-1',
      action: 'opened',
      title: 'feat: First feature',
      date: format(parse('2018-12-10T21:33:08Z'), 'MM/DD/YYYY')
    },
    {
      id: '456',
      type: 'Create Event',
      repo: 'repo-1',
      action: 'branch',
      title: 'feat: Second feature',
      date: format(parse('2018-12-10T21:24:53Z'), 'MM/DD/YYYY')
    },
    {
      id: '789',
      type: 'PullRequestEvent',
      repo: 'repo-1',
      action: 'opened',
      title: 'feat: Third feature',
      date: format(parse('2018-12-10T21:33:08Z'), 'MM/DD/YYYY')
    }
  ]
};
