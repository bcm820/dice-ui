import React from 'react';
import { Heading, Text } from 'spectacle';
import { ellipsis, simpleParseTime } from '../utils';
import { SHORT_SUMMARY_WORD_LENGTH } from '../constants';

const Main = ({ list }) => (
  <React.Fragment>
    <Text
      textAlign={'left'}
      caps
      style={{ letterSpacing: '0.05em', opacity: 0.7 }}
    >
      Recent Activities
    </Text>
    {list.length ? (
      list.map((item, i) => (
        <React.Fragment key={item.created_at + i}>
          <Heading
            textAlign={'left'}
            size={6}
            textColor={'tertiary'}
            style={{ textShadow: '0.7px 0.7px black', paddingTop: 40 }}
          >
            {item.type}
          </Heading>
          <Text
            textAlign={'left'}
            textColor={'tertiary'}
            style={{ textShadow: '0.7px 0.7px black' }}
          >
            {item.repo_name}
          </Text>
          <Text textAlign={'left'} style={{ fontSize: '2.5vw' }}>
            {simpleParseTime(item.created_at)} -{' '}
            {ellipsis(item.summaryline, SHORT_SUMMARY_WORD_LENGTH)}
          </Text>
        </React.Fragment>
      ))
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
          We couldn't find any activity for this user / repository. But we're
          sure that the developer(s) are very hard at work! Maybe there will be
          more information to display later on...
        </Text>
      </React.Fragment>
    )}
  </React.Fragment>
);

export default Main;
