import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../actions';

import { Slide } from 'spectacle';
import Layout from '../../components/Layout';

import { tempRepo } from './temp.js';

class Repo extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    // const { repo } = this.props;
    return (
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
    );
  }
}

export default connect(
  ({ repo }) => ({ repo }),
  dispatch
)(Repo);
