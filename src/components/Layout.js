import React from 'react';

import { Table, TableBody, TableRow, TableItem } from 'spectacle';

import Sidebar from './Sidebar';
import SingleDisplay from './SingleDisplay';
import ListDisplay from './ListDisplay';

const Layout = ({
  sidebarHeading,
  sidebarSubHeading,
  image,
  listHeading,
  list,
  events
}) => (
  <Table style={{ height: '100vh', width: '97vw', paddingBottom: 100 }}>
    <TableBody>
      <TableRow>
        <TableItem style={{ paddingLeft: 50, paddingRight: 25 }}>
          <Sidebar
            heading={sidebarHeading}
            subHeading={sidebarSubHeading}
            image={image}
            listHeading={listHeading}
            list={list}
          />
        </TableItem>
        <TableItem style={{ paddingLeft: 25, paddingRight: 50 }}>
          {events.length === 1 ? (
            <SingleDisplay
              heading={events[0].title}
              content={events[0].description}
            />
          ) : (
            <ListDisplay list={events} />
          )}
        </TableItem>
      </TableRow>
    </TableBody>
  </Table>
);

export default Layout;
