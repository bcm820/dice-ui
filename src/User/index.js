import React from 'react';
import { connect } from 'react-redux';
import { fetchRepo } from '../Repo/sagas';

import { Slide, Heading, Text, List, ListItem } from 'spectacle';

// dispatch currentDisplay
// dispatch fetchOther

const User = ({ dispatch }) => (
  <Slide bgColor="secondary" onActive={dispatch}>
    <Heading size={1} fit lineHeight={1} textColor="primary">
      Featured Project
    </Heading>
    <Text margin="10px 0 0" textColor="quaternary" size={1} bold>
      Project data goes here
    </Text>
    <List textColor="primary">
      <ListItem>Recent Events</ListItem>
      <ListItem>Contributors</ListItem>
    </List>
  </Slide>
);

export default connect(
  null,
  fetchRepo
)(User);
