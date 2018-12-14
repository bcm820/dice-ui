import React from 'react';
import { connect } from 'react-redux';

import { Slide } from 'spectacle';
import Layout from '../../components/Layout';
import logo from './logo.png';

const RepoLongSummary = ({ repo: { data } }) => {
  return (
    <Slide align={'flex-start flex-start'}>
      <Layout
        sidebarHeading={data.name}
        sidebarSubHeading={data.description}
        sidebarSubText={`Language: ${data.language}`}
        image={logo}
        listHeading={'Dates'}
        list={[`Created: ${data.createdAt}`, `Updated: ${data.updatedAt}`]}
        activities={data.activities}
        shortSummaries={false}
      />
    </Slide>
  );
};

export default connect(({ repo }) => ({ repo }))(RepoLongSummary);
