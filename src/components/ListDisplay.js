import React from 'react';
import { ellipsis, fmtDate } from '../common/helpers';
import { SHORT_SUMMARY_WORD_LENGTH, DATE_FORMAT } from '../common/constants';
import { SectionHeading } from '../styles/Headings';
import DisplayContent from './DisplayContent';
import DisplayContentNone from './DisplayContentNone';

const ListDisplay = ({ data: list }) => (
  <React.Fragment>
    <SectionHeading>Recent Activities</SectionHeading>
    {list.length ? (
      list
        .slice(0, 3)
        .map(activity => (
          <DisplayContent
            key={`${activity.date}${activity.type}`}
            heading={activity.type}
            subHeading={activity.repo}
            content={ellipsis(
              `${fmtDate(activity.date, DATE_FORMAT)} - ${activity.summary}`,
              SHORT_SUMMARY_WORD_LENGTH
            )}
          />
        ))
    ) : (
      <DisplayContentNone message={'Nothing to list.'} />
    )}
  </React.Fragment>
);

export default ListDisplay;
