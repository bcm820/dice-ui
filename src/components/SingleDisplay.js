import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Heading, Text } from 'spectacle';
import { ellipsis } from '../utils';

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
    <Text
      textAlign={'left'}
      style={{
        fontSize: '2.5vw'
      }}
    >
      <ReactMarkdown source={ellipsis(content, 60)} />
    </Text>
  </React.Fragment>
);

export default SingleDisplay;

// <Markdown>{ellipsis(content, 80)}</Markdown>
