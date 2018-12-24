import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../redux/actions';

import { Slide } from 'spectacle';
import Layout from '../../components/Layout';

class User extends React.Component {
  componentDidMount() {
    setTimeout(this.props.fetchRepo, 1000);
  }

  render() {
    const { data: user } = this.props.user;
    return (
      <Slide align={'flex-start flex-start'}>
        <Layout
          display={{
            type: this.props.type,
            data: user.activities
          }}
          sidebar={{
            image: user.image,
            isLogo: false,
            heading: user.name,
            taglines: [user.username, user.email],
            content: [
              {
                title: 'Repositories',
                data: user.repos
              }
            ]
          }}
        />
      </Slide>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  dispatch
)(User);
