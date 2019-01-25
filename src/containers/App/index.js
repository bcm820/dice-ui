import React from 'react';
import posed from 'react-pose';
import { connect } from 'react-redux';
import { dispatchRequest } from '../../redux/actions';

import Card from '../Card';
import { FeedContainer } from './styles';
// import { REQUEST_INTERVAL } from '../../common/constants';

const Container = posed.div({
  start: { top: -300 },
  end: { top: 0 }
});
Container.defaultProps = {
  style: { position: 'relative' }
};

class App extends React.Component {
  state = { paused: false };

  // componentDidMount() {
  //   this.props.fetchCurrent();
  //   this.interval = setInterval(() => {
  //     const { fetchCurrent, error } = this.props;
  //     !error && fetchCurrent();
  //   }, REQUEST_INTERVAL);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    // const { current, previous, moving } = this.props;
    return (
      // <Container pose={moving ? 'start' : 'end'}>
      <FeedContainer>
        <Card
          {...{
            imageUrl:
              'https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png',
            name: 'React',
            username: '@reactjs',
            date: '19 Dec 2018',
            content: `Just released a performance bugfix for React.lazy. Thanks to @janrywang for reporting it! 🙌 \n\nReact 16.7: No, This Is Not The One With Hooks`
          }}
        />
        {/*current.map(c => (
            <Card key={c}>{c}</Card>
          ))}
          {previous.map(p => (
            <Card key={p}>{p}</Card>
          ))*/}
      </FeedContainer>
      // </Container>
    );
  }
}

export default connect(
  ({ current, previous, moving }) => ({
    current: current.data,
    previous: previous.data,
    error: current.error,
    moving
  }),
  { dispatchRequest }
)(App);
