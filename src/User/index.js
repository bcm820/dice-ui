import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../actions';

import { Slide, Heading, Text, List, ListItem } from 'spectacle';

const User = ({ fetchRepo }) => (
  <Slide bgColor="secondary" onActive={fetchRepo}>
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
  dispatch
)(User);
