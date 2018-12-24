import {
  partition,
  getWordLength,
  parseDate,
  titleToSentence
} from '../../common/helpers';
import { SHORT_SUMMARY_WORD_LENGTH } from '../../common/constants';

export const mapRepo = (repo, activityData) => {
  const { activity } = activityData;
  const [short, long] = partition(
    activity,
    a => getWordLength(a.summaryline) <= SHORT_SUMMARY_WORD_LENGTH
  );
  return {
    ...repo,
    activities: {
      short: mapActivities(short),
      long: mapActivities(long)
    },
    lastFetched: Date.now()
  };
};

export const mapActivities = activities =>
  activities.map(a => ({
    type: titleToSentence(a.type),
    summary: a.summaryline,
    repo: a.repo_name,
    date: parseDate(a.created_at)
  }));
