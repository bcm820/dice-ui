import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../actions';

import { Slide, Table, TableRow, TableItem } from 'spectacle';

import ContentBody from '../../components/ContentBody';
import Sidebar from '../../components/Sidebar';
import samplePhoto from './temp.png';

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
        <Table style={{ height: '100vh', width: '100vw', paddingBottom: 100 }}>
          <TableRow>
            <TableItem
              style={{
                paddingLeft: 40,
                paddingRight: 40
              }}
            >
              <ContentBody
                contentType={'Recent Events'}
                heading={
                  'Martin Terskin: Merge pull request #2 from DecipherNow/polish'
                }
                content={`Issue in July: #15 Install should include gatsby. 8 live branches.`}
              />
            </TableItem>
            <TableItem style={{ paddingRight: 120 }}>
              <Sidebar
                heading={'gm-static-pages'}
                subHeading={
                  'A static site for managing Grey Matter static HTML pages'
                }
                image={samplePhoto}
                listHeading={'Contributors'}
                list={['Martin Terskin (7ruth)', 'Stuart Hanberg (shanberg)']}
              />
            </TableItem>
          </TableRow>
        </Table>
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
