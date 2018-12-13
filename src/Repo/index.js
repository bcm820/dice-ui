import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../actions';

import { Slide, Heading, Text, List, ListItem } from 'spectacle';

const Repo = ({ fetchUser }) => (
  <Slide bgColor="primary" onActive={fetchUser}>
    <Heading size={1} fit lineHeight={1} textColor="secondary">
      Featured User
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
      User data goes here
    </Text>
    <List>
      <ListItem>Recent Activity</ListItem>
      <ListItem>Primary Respositories</ListItem>
    </List>
  </Slide>
);

export default connect(
  null,
  dispatch
)(Repo);
