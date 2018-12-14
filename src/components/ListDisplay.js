import React from 'react';
import { Heading, Text } from 'spectacle';
import { ellipsis } from '../utils';

const Main = ({ list }) => (
  <React.Fragment>
    <Text
      textAlign={'left'}
      caps
      style={{ letterSpacing: '0.05em', opacity: 0.7 }}
    >
      Recent Events
    </Text>
    {list.map(item => (
      <React.Fragment key={item.id}>
        <Heading
          textAlign={'left'}
          size={6}
          textColor={'tertiary'}
          style={{ textShadow: '0.7px 0.7px black', paddingTop: 40 }}
        >
          {item.type} {item.action}
        </Heading>
        <Text
          textAlign={'left'}
          textColor={'tertiary'}
          style={{ textShadow: '0.7px 0.7px black' }}
        >
          {item.repo}
        </Text>
        <Text textAlign={'left'} style={{ fontSize: '2.5vw' }}>
          {item.date}: {ellipsis(item.title, 20)}
        </Text>
      </React.Fragment>
    ))}
  </React.Fragment>
);

export default Main;
