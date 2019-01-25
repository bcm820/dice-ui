import React from 'react';
import { Text } from 'spectacle';
import { GreenHeading } from '../styles/Headings';
import { EmptyBlock } from '../styles/Dividers';

const DisplayContentNone = ({ message }) => (
  <React.Fragment>
    <GreenHeading>No Activity Found!</GreenHeading>
    <Text textAlign={'left'}>{message}</Text>
    <EmptyBlock height={'50vh'} />
  </React.Fragment>
);

export default DisplayContentNone;
