import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../actions';

import { Deck } from 'spectacle';
import config from './spectacle';

import Repo from '../Repo';
import User from '../User';

import { SLIDE_DURATION } from '../../constants';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
    const { user, repo } = this.props;
    return user && repo ? (
      <Deck {...config} autoplayDuration={SLIDE_DURATION}>
        <Repo transition={['fade']} />
        <User transition={['fade']} />
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
