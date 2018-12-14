import React from 'react';
import { Heading, Text, Markdown } from 'spectacle';
import { ellipsis } from '../utils';
import { LONG_SUMMARY_WORD_LENGTH } from '../constants';

const SingleDisplay = ({ heading, content }) => (
  <React.Fragment>
    <Text
      textAlign={'left'}
      caps
      style={{ letterSpacing: '0.05em', opacity: 0.7 }}
    >
      Recent Event
    </Text>
    <Heading
      textAlign={'left'}
      size={5}
      textColor={'tertiary'}
      style={{ textShadow: '0.7px 0.7px black', paddingTop: 20 }}
    >
      {heading}
    </Heading>
    <Markdown
      style={{
        fontSize: '2.5vw',
        textAlign: 'left'
      }}
    >
      {ellipsis(content, LONG_SUMMARY_WORD_LENGTH)}
    </Markdown>
  </React.Fragment>
);

export default SingleDisplay;

// <Markdown>{ellipsis(content, 80)}</Markdown>
