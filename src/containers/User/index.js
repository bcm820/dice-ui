import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../actions';

import { Slide } from 'spectacle';
import Layout from '../../components/Layout';

import { tempUserMult } from './temp.js';

class User extends React.Component {
  componentDidMount() {
    this.props.fetchRepo();
  }

  render() {
    // const { user } = this.props;
    return (
      <Slide align={'flex-start flex-start'}>
        <Layout
          sidebarHeading={tempUserMult.displayName}
          sidebarSubHeading={tempUserMult.username}
          image={tempUserMult.image}
          listHeading={'Primary Repositories'}
          list={tempUserMult.repos}
          events={
            tempUserMult.event ? [tempUserMult.event] : tempUserMult.events
          }
        />
      </Slide>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  dispatch
)(User);
