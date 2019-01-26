import React from 'react';
import posed from 'react-pose';
import { connect } from 'react-redux';
import { dispatches } from '../../redux/actions';

import Card from '../Card';
import { FeedContainer } from './styles';

const Container = posed.div({
  start: { top: -300 },
  end: { top: 0 }
});
Container.defaultProps = { style: { position: 'relative' } };

class App extends React.Component {
  componentDidMount() {
    this.props.startFetching();
  }

  componentWillUnmount() {
    this.props.stopFetching();
  }

  render() {
    const { current, previous, move } = this.props;
    return (
      <Container pose={move ? 'start' : 'end'}>
        <FeedContainer>
          {current.map(c => (
            <Card key={c.id} {...c} />
          ))}
          {previous.map(p => (
            <Card key={p.id} {...p} />
          ))}
        </FeedContainer>
      </Container>
    );
  }
}

export default connect(
  ({ current, previous, move }) => ({
    current: current.data,
    previous: previous.data,
    error: current.error,
    move
  }),
  dispatches
)(App);
