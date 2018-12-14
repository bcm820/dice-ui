import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../actions';

import { Slide } from 'spectacle';
import Layout from '../../components/Layout';
import samplePhoto from './temp.png';

class Repo extends React.Component {
  componentDidMount() {
    const { repo, fetchRepo, fetchUser } = this.props;
    if (!repo.data) fetchRepo();
    fetchUser();
  }

  render() {
    const { repo } = this.props;
    const tempRepo = {
      repoName: 'gm-static-pages',
      repoDesc: 'A static site for managing Grey Matter static HTML pages',
      image: samplePhoto,
      contributors: ['Martin Terskin (7ruth)', 'Stuart Hanberg (shanberg)'],
      event: 'Martin Terskin: Merge pull request #2 from DecipherNow/polish',
      content: `Issue in July: #15 Install should include gatsby. 8 live branches.`
    };
    return repo.data ? (
      <Slide align={'flex-start flex-start'}>
        <Layout
          contentType={'Recent Event'}
          sidebarHeading={tempRepo.repoName}
          sidebarSubHeading={tempRepo.repoDesc}
          image={tempRepo.image}
          listHeading={'Contributors'}
          list={tempRepo.contributors}
          mainHeading={tempRepo.event}
          mainContent={tempRepo.content}
          sidebarLeft={false}
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
