import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../redux/actions';

import { Slide } from 'spectacle';
import Layout from '../../components/Layout';
import logo from './logo.png';

import { fmtDate } from '../../common/helpers';
import { DATE_FORMAT } from '../../common/constants';

class Repo extends React.Component {
  componentDidMount() {
    setTimeout(this.props.fetchUser, 1000);
  }

  render() {
    const { data: repo } = this.props.repo;
    return (
      <Slide align={'flex-start flex-start'}>
        <Layout
          display={{
            type: this.props.type,
            data: repo.activities
          }}
          sidebar={{
            image: logo,
            isLogo: true,
            heading: repo.shortName,
            taglines: [repo.description],
            content: [
              {
                title: 'Language',
                data: [repo.language]
              },
              {
                title: null,
                data: [
                  `Created ${fmtDate(repo.createdAt, DATE_FORMAT)}`,
                  `Updated ${fmtDate(repo.updatedAt, DATE_FORMAT)}`
                ]
              }
            ]
          }}
        />
      </Slide>
    );
  }
}

export default connect(
  ({ repo }) => ({ repo }),
  dispatch
)(Repo);
