import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../actions';

import { Slide } from 'spectacle';
import Layout from '../../components/Layout';
import logo from './logo.png';

class Repo extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const repo = this.props.repo.data;
    return (
      <Slide align={'flex-start flex-start'}>
        <Layout
          sidebarHeading={repo.name}
          sidebarSubHeading={repo.description}
          sidebarSubText={`Language: ${repo.language}`}
          image={logo}
          listHeading={'Dates'}
          list={[`Created: ${repo.createdAt}`, `Updated: ${repo.updatedAt}`]}
          activities={repo.activities}
        />
      </Slide>
    );
  }
}

export default connect(
  ({ repo }) => ({ repo }),
  dispatch
)(Repo);
