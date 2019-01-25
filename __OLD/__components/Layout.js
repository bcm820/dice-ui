import React from 'react';

import { Table, TableBody, TableRow, TableItem } from 'spectacle';

import Sidebar from './Sidebar';
import SingleDisplay from './SingleDisplay';
import ListDisplay from './ListDisplay';

const Layout = ({ display, sidebar }) => (
  <Table style={{ height: '100vh', width: '97vw', paddingBottom: 100 }}>
    <TableBody>
      <TableRow>
        <TableItem style={{ paddingLeft: 50, paddingRight: 25 }}>
          <Sidebar {...sidebar} />
        </TableItem>
        <TableItem style={{ paddingLeft: 25, paddingRight: 50 }}>
          {display.type === 'List' ? (
            <ListDisplay data={display.data.short} />
          ) : (
            <SingleDisplay data={display.data.long} />
          )}
        </TableItem>
      </TableRow>
    </TableBody>
  </Table>
);

export default Layout;
