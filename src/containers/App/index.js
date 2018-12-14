import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../actions';

import { Deck } from 'spectacle';
import config from './spectacle';

// import Repo from '../Repo';
import User from '../User';
import UserLongSummary from '../User/UserLongSummary';

import { SLIDE_DURATION } from '../../constants';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
    const { user, repo } = this.props;
    return user && repo ? (
      <Deck {...config} autoplayDuration={5000 || SLIDE_DURATION}>
        <User transition={['fade']} />
        {user.activities.long && <UserLongSummary transition={['fade']} />}
      </Deck>
    ) : (
      <div>Loading...</div>
    );
  }
}

// <Repo transition={['fade']} />
export default connect(
  ({ user, repo }) => ({ user: user.data, repo: repo.data }),
  dispatch
)(App);
