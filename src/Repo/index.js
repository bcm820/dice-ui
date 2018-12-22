import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../actions';

import { Slide } from 'spectacle';
import Layout from '../App/common/Layout';
import logo from './logo.png';

class Repo extends React.Component {
  componentDidMount() {
    setTimeout(this.props.fetchUser, 1000);
  }

  render() {
    const repo = this.props.repo.data;
    const { shortSummaries } = this.props;
    return (
      <Slide align={'flex-start flex-start'}>
        <Layout
          sidebarHeading={repo.name.replace('DecipherNow/', '')}
          sidebarSubHeading={repo.description}
          sidebarSubText={repo.language ? `Language: ${repo.language}` : null}
          image={logo}
          isLogo={true}
          listHeading={'Dates'}
          list={[`Created: ${repo.createdAt}`, `Updated: ${repo.updatedAt}`]}
          activities={repo.activities}
          shortSummaries={shortSummaries}
        />
      </Slide>
    );
  }
}

export default connect(
  ({ repo }) => ({ repo }),
  dispatch
)(Repo);
