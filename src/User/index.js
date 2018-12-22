import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../actions';

import { Slide } from 'spectacle';
import Layout from '../App/common/Layout';

class User extends React.Component {
  componentDidMount() {
    setTimeout(this.props.fetchRepo, 1000);
  }

  render() {
    const user = this.props.user.data;
    const { shortSummaries } = this.props;
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
          shortSummaries={shortSummaries}
        />
      </Slide>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  dispatch
)(User);