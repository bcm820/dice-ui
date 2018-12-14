import { format, parse } from 'date-fns';
import samplePhoto from '../temp.png';

export const tempRepo = {
  repoName: 'repo-name',
  repoDesc: 'No description, website, or topics provided.',
  image: samplePhoto,
  contributors: ['Contributor 1', 'Contributor 2'],
  date: format(parse('2018-12-11T11:21:30Z'), 'MM/DD/YYYY'),
  event: {
    title: 'Issue Title #99',
    description:
      'This text string renders via _Markdown_. It works:\r\n\r\n**SEE!\r\n\r\n This is the end of this message.'
  }
};
