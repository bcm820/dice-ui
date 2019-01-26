import { parse, format } from 'date-fns';
import { DATE_FORMAT } from '../../common/constants';

const parseContent = d => {
  switch (d.type) {
    case 'PushEvent':
      return d.payload.commits.map(c => c.message).join('\n\n');
    case 'PullRequestEvent':
      return d.payload.pull_request.body;
    case 'IssuesEvent':
      return d.payload.body;
    case 'IssueCommentEvent':
      return d.payload.comment.body;
    case 'CommitCommentEvent':
      return d.payload.comment.body;
    case 'CreateEvent':
      return undefined;
    case 'DeleteEvent':
      return undefined;
    case 'ReleaseEvent':
      return undefined;
    default:
      return `Unable to parse content from *${d.type}*. DICE still a WIP!`;
  }
};

export const mapCurrentData = data =>
  data
    .map(d => ({
      id: d.id,
      event: d.type.replace('Event', ''),
      username: d.actor.login,
      imageUrl: d.actor.avatar_url,
      repo: d.repo.name.replace('DecipherNow/', ''),
      date: format(parse(d.created_at), DATE_FORMAT),
      content: parseContent(d)
    }))
    .filter(d => d.content)
    .reverse();
