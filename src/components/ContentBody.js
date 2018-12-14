import React from 'react';

import { Heading, Text } from 'spectacle';

const SlideFooter = ({ contentType, heading, content }) => (
  <React.Fragment>
    <Text
      textAlign={'left'}
      caps
      style={{ letterSpacing: '0.05em', opacity: 0.7 }}
    >
      {contentType}
    </Text>
    <Heading
      textAlign={'left'}
      size={4}
      textColor={'tertiary'}
      style={{ textShadow: '0.7px 0.7px black', paddingTop: 20 }}
    >
      {heading}
    </Heading>
    <Text textAlign={'left'} style={{ paddingTop: 20, fontSize: '4vw' }}>
      {content}
    </Text>
  </React.Fragment>
);

export default SlideFooter;
