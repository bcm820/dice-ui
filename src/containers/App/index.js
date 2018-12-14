import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../actions';

import { Deck } from 'spectacle';
import config from './spectacle';

import Repo from '../Repo';
import User from '../User';
import UserLongSummary from '../User/UserLongSummary';
import RepoLongSummary from '../Repo/RepoLongSummary';

// import { SLIDE_DURATION } from '../../constants';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
    const { user, repo } = this.props;
    return user && repo ? (
      <Deck {...config} autoplayDuration={8000}>
        <User transition={['fade']} />
        {user.activities.long && <UserLongSummary transition={['fade']} />}
        <Repo transition={['fade']} />
        {repo.activities.long && <RepoLongSummary transition={['fade']} />}
      </Deck>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default connect(
  ({ user, repo }) => ({ user: user.data, repo: repo.data }),
  dispatch
)(App);
