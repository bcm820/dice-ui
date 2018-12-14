import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '../../actions';

import { Slide, Table, TableRow, TableItem } from 'spectacle';

import ContentBody from '../../components/ContentBody';
import Sidebar from '../../components/Sidebar';
import samplePhoto from './temp.jpeg';

class User extends React.Component {
  componentDidMount() {
    const { user, fetchUser, fetchRepo } = this.props;
    if (!user.data) fetchUser();
    fetchRepo();
  }

  render() {
    const { user } = this.props;
    return user.data ? (
      <Slide align={'flex-start flex-start'}>
        <Table style={{ height: '100vh', width: '100vw', paddingBottom: 100 }}>
          <TableRow>
            <TableItem style={{ paddingLeft: 40, paddingRight: 40 }}>
              <Sidebar
                heading={'Robert Fielding'}
                subHeading={'rfielding'}
                image={samplePhoto}
                listHeading={'Primary Repositories'}
                list={['gm-data-aac', 'gm-data']}
              />
            </TableItem>
            <TableItem
              style={{
                paddingLeft: 40,
                paddingRight: 40
              }}
            >
              <ContentBody
                contentType={'Recent Activity'}
                heading={'Closed an issue in DecipherNow/gm-data #114'}
                content={`I am currently getting TLS setup with MongoDB. It works locally (outside
                  of containers). I am currently getting TLS setup with MongoDB. It works
                  locally (outside of containers).`}
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
  ({ user }) => ({ user }),
  dispatch
)(User);
