import React from 'react';
import { Heading, Text, Markdown } from 'spectacle';
import { ellipsis, simpleParseTime } from '../common/helpers';
import { LONG_SUMMARY_WORD_LENGTH } from '../common/constants';

const SingleDisplay = ({ activity }) => (
  <React.Fragment>
    <Text
      textAlign={'left'}
      caps
      style={{ letterSpacing: '0.05em', opacity: 0.7 }}
    >
      Recent Activity
    </Text>
    {activity ? (
      <React.Fragment>
        <Heading
          textAlign={'left'}
          size={5}
          textColor={'tertiary'}
          style={{ textShadow: '0.7px 0.7px black', paddingTop: 20 }}
        >
          {activity.type}
        </Heading>
        <Heading
          textAlign={'left'}
          size={6}
          textColor={'tertiary'}
          style={{ textShadow: '0.7px 0.7px black' }}
        >
          {activity.repo_name}
        </Heading>
        <Markdown
          style={{
            fontSize: '2.5vw',
            textAlign: 'left'
          }}
        >
          {ellipsis(
            simpleParseTime(activity.created_at) + ': ' + activity.summaryline,
            LONG_SUMMARY_WORD_LENGTH
          )}
        </Markdown>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Heading
          textAlign={'left'}
          size={5}
          textColor={'tertiary'}
          style={{ textShadow: '0.7px 0.7px black', paddingTop: 20 }}
        >
          No Activity Found!
        </Heading>
        <Text textAlign={'left'}>
          We couldn't find any activity for this user / repository.
          <br />
          <br />
          This screen tracks activity like issues and other major events.
          <br />
          <br />
          We're sure the developer(s) represented on this slide are very hard at
          work! Maybe next time this slide loads there will be more information
          to display...
        </Text>
      </React.Fragment>
    )}
  </React.Fragment>
);

export default SingleDisplay;

// <Markdown>{ellipsis(content, 80)}</Markdown>
