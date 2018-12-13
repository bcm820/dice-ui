import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../actions';

import { Deck } from 'spectacle';
import config from './spectacle';

import Repo from '../Repo';
import User from '../User';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }
  render() {
    const slideDuration = 30000;
    // const slideDuration = this.props.words * 250 || 30000;
    return (
      <Deck {...config} autoplayDuration={slideDuration}>
        <Repo transition={['fade']} />
        <User transition={['fade']} />
      </Deck>
    );
  }
}

export default connect(
  ({ words }) => ({ words }),
  dispatch
)(App);
