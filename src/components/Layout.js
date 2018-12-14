import React from 'react';

import { Table, TableBody, TableRow, TableItem } from 'spectacle';

import Sidebar from './Sidebar';
import SingleDisplay from './SingleDisplay';
import ListDisplay from './ListDisplay';

const Layout = ({
  sidebarHeading,
  sidebarSubHeading,
  sidebarSubText,
  image,
  listHeading,
  list,
  activities,
  shortSummaries = true
}) => (
  <Table style={{ height: '100vh', width: '97vw', paddingBottom: 100 }}>
    <TableBody>
      <TableRow>
        <TableItem style={{ paddingLeft: 50, paddingRight: 25 }}>
          <Sidebar
            heading={sidebarHeading}
            subHeading={sidebarSubHeading}
            subText={sidebarSubText}
            image={image}
            listHeading={listHeading}
            list={list}
          />
        </TableItem>
        <TableItem style={{ paddingLeft: 25, paddingRight: 50 }}>
          {shortSummaries ? (
            <ListDisplay list={activities.short.slice(0, 3)} />
          ) : (
            <SingleDisplay activity={activities.long} />
          )}
        </TableItem>
      </TableRow>
    </TableBody>
  </Table>
);

export default Layout;
