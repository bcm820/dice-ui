import React from 'react';
import { connect } from 'react-redux';
import { listsDispatches } from './sagas';

import { Deck } from 'spectacle';
import config from './spectacle';

import Repo from '../Repo';
import User from '../User';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }
  render() {
    // const slideDuration = this.props.words * 300 || 15000;
    const slideDuration = 15000;
    return (
      <Deck {...config} autoplayDuration={slideDuration}>
        <Repo transition={['fade']} />
        <User transition={['fade']} />
      </Deck>
    );
  }
}

export default connect(
  null,
  listsDispatches
)(App);
