import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../actions';

import { Slide, Heading, Text, List, ListItem } from 'spectacle';

class User extends React.Component {
  componentDidMount() {
    if (!this.props.user.data) this.props.fetchUser();
    this.props.fetchRepo();
  }

  render() {
    const { user } = this.props;
    return user.data ? (
      <Slide bgColor="secondary">
        <Heading size={1} fit lineHeight={1} textColor="primary">
          Featured User
        </Heading>
        <Text margin="10px 0 0" textColor="quaternary" size={1} bold>
          {user.data}
        </Text>
        <List textColor="primary">
          <ListItem>Recent Events</ListItem>
          <ListItem>Contributors</ListItem>
        </List>
      </Slide>
    ) : (
      <Slide>
        <Heading>Loading...</Heading>
      </Slide>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  dispatch
)(User);
