import React from 'react';
import { connect } from 'react-redux';

import { Slide } from 'spectacle';
import Layout from '../../components/Layout';

const UserLongSummary = ({ user: { data } }) => (
  <Slide align={'flex-start flex-start'}>
    <Layout
      sidebarHeading={data.name}
      sidebarSubHeading={data.username}
      sidebarSubText={data.email}
      image={data.image}
      listHeading={'Primary Repositories'}
      list={data.repos}
      activities={data.activities}
      shortSummaries={false}
    />
  </Slide>
);

export default connect(({ user }) => ({ user }))(UserLongSummary);
