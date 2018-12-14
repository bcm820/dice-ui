import React from 'react';

import { Table, TableBody, TableRow, TableItem } from 'spectacle';

import Main from './Main';
import Sidebar from './Sidebar';

const Layout = ({
  contentType,
  sidebarHeading,
  sidebarSubHeading,
  image,
  listHeading,
  list,
  mainHeading,
  mainContent,
  sidebarLeft = true
}) => {
  const mainPlacement = sidebarLeft
    ? { paddingLeft: 40, paddingRight: 40 }
    : { paddingRight: 120 };
  const renderMain = () => (
    <TableItem style={mainPlacement}>
      <Main
        contentType={contentType}
        heading={mainHeading}
        content={mainContent}
      />
    </TableItem>
  );
  return (
    <Table style={{ height: '100vh', width: '100vw', paddingBottom: 100 }}>
      <TableBody>
        <TableRow>
          {!sidebarLeft && renderMain()}
          <TableItem style={{ paddingLeft: 40, paddingRight: 40 }}>
            <Sidebar
              heading={sidebarHeading}
              subHeading={sidebarSubHeading}
              image={image}
              listHeading={listHeading}
              list={list}
            />
          </TableItem>
          {sidebarLeft && renderMain()}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Layout;
