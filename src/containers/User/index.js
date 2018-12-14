import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../actions';

import { Slide } from 'spectacle';
import Layout from '../../components/Layout';
import samplePhoto from './temp.jpeg';

class User extends React.Component {
  componentDidMount() {
    const { user, fetchUser, fetchRepo } = this.props;
    if (!user.data) fetchUser();
    fetchRepo();
  }

  render() {
    const { user } = this.props;
    const tempUser = {
      displayName: 'Robert Fielding',
      username: 'rfielding',
      image: samplePhoto,
      repos: ['gm-data-aac', 'gm-data'],
      activity: 'Closed an issue in DecipherNow/gm-data #114',
      content: `I am currently getting TLS setup with MongoDB. It works locally (outside
        of containers). I am currently getting TLS setup with MongoDB. It works
        locally (outside of containers).`
    };
    return user.data ? (
      <Slide align={'flex-start flex-start'}>
        <Layout
          contentType={'Recent Activity'}
          sidebarHeading={tempUser.displayName}
          sidebarSubHeading={tempUser.username}
          image={tempUser.image}
          listHeading={'Primary Repositories'}
          list={tempUser.repos}
          mainHeading={tempUser.activity}
          mainContent={tempUser.content}
        />
      </Slide>
    ) : (
      <Slide>Loading...</Slide>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  dispatch
)(User);
