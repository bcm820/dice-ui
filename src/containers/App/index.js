import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../actions';

import { Deck } from 'spectacle';
import config from './spectacle';

import Repo from '../Repo';
import User from '../User';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
    const { user, repo } = this.props;
    return user && repo ? (
      <Deck {...config} autoplayDuration={8000}>
        <User transition={['fade']} />
        <Repo transition={['fade']} />
        <User transition={['fade']} shortSummaries={false} />
        <Repo transition={['fade']} shortSummaries={false} />
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
