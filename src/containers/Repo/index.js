import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../actions';

import { Slide } from 'spectacle';
import Layout from '../../components/Layout';

import { tempRepo } from './temp.js';

class Repo extends React.Component {
  componentDidMount() {
    const { repo, fetchRepo, fetchUser } = this.props;
    if (!repo.data) fetchRepo();
    fetchUser();
  }

  render() {
    const { repo } = this.props;
    return repo.data ? (
      <Slide align={'flex-start flex-start'}>
        <Layout
          sidebarHeading={tempRepo.repoName}
          sidebarSubHeading={tempRepo.repoDesc}
          image={tempRepo.image}
          listHeading={'Contributors'}
          list={tempRepo.contributors}
          events={[tempRepo.event]}
        />
      </Slide>
    ) : (
      <Slide>Loading...</Slide>
    );
  }
}

export default connect(
  ({ repo }) => ({ repo }),
  dispatch
)(Repo);
