import React from 'react';
import { ellipsis, getRandom, fmtDate } from '../common/helpers';
import { LONG_SUMMARY_WORD_LENGTH, DATE_FORMAT } from '../common/constants';
import { SectionHeading } from '../styles/Headings';
import DisplayContent from './DisplayContent';
import DisplayContentNone from './DisplayContentNone';

const SingleDisplay = ({ data }) => {
  const activity = getRandom(data);
  return (
    <React.Fragment>
      <SectionHeading>Recent Activity</SectionHeading>
      {activity ? (
        <DisplayContent
          key={`${activity.date}${activity.type}`}
          heading={activity.type}
          subHeading={activity.repo}
          content={ellipsis(
            `${fmtDate(activity.date, DATE_FORMAT)} - ${activity.summary}`,
            LONG_SUMMARY_WORD_LENGTH
          )}
        />
      ) : (
        <DisplayContentNone message={'Nothing to display.'} />
      )}
    </React.Fragment>
  );
};

export default SingleDisplay;
