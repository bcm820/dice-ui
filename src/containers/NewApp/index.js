import React from 'react';
import posed from 'react-pose';
import { connect } from 'react-redux';

import { dispatches } from '../../redux/actions';
import { SLIDE_DURATION } from '../../common/constants';
import { Column, Card } from '../../styles/new';

const Container = posed.div({
  start: { top: -300 },
  end: { top: 0 }
});
Container.defaultProps = {
  style: { position: 'relative' }
};

class App extends React.Component {
  state = { paused: false };

  componentDidMount() {
    this.props.fetchCurrent();
    this.interval = setInterval(() => {
      const { fetchCurrent, error } = this.props;
      !error && fetchCurrent();
    }, SLIDE_DURATION);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { current, previous, moving } = this.props;
    return (
      <Container pose={moving ? 'start' : 'end'}>
        <Column>
          {current.map(c => (
            <Card key={c}>{c}</Card>
          ))}
          {previous.map(p => (
            <Card key={p}>{p}</Card>
          ))}
        </Column>
      </Container>
    );
  }
}

export default connect(
  ({ current, previous, moving }) => ({
    current: current.data,
    previous: previous.data,
    moving,
    error: current.error
  }),
  dispatches
)(App);
