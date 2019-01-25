import { partition, getWordLength } from '../../common/helpers';
import { mapActivities } from '../Repo/selectors';
import { SHORT_SUMMARY_WORD_LENGTH } from '../../common/constants';

export const mapUser = (user, activityData, repoData) => {
  const { activity } = activityData;
  const [short, long] = partition(
    activity,
    a => getWordLength(a.summaryline) <= SHORT_SUMMARY_WORD_LENGTH
  );
  const { repository } = repoData;
  return {
    ...user,
    repos: mapUserRepos(repository),
    activities: {
      short: mapActivities(short),
      long: mapActivities(long)
    },
    lastFetched: Date.now()
  };
};

const mapUserRepos = (repos = []) =>
  repos.map(r => r.name.replace('DecipherNow/', ''));
