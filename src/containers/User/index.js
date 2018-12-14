import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../actions';

import { Slide } from 'spectacle';
import Layout from '../../components/Layout';

class User extends React.Component {
  componentDidMount() {
    this.props.fetchRepo();
  }

  render() {
    const user = this.props.user.data;
    return (
      <Slide align={'flex-start flex-start'}>
        <Layout
          sidebarHeading={user.name}
          sidebarSubHeading={user.username}
          sidebarSubText={user.email}
          image={user.image}
          listHeading={'Primary Repositories'}
          list={user.repos}
          activities={user.activities}
        />
      </Slide>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  dispatch
)(User);
