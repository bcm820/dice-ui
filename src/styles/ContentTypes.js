import styled from 'styled-components';
import { Text } from 'spectacle';

export const TagLine = styled(Text).attrs(_ => ({
  textAlign: 'left',
  italic: true
}))`
  font-size: 1.75vw;
`;

export const Item = styled(Text).attrs(_ => ({
  textAlign: 'left'
}))`
  font-size: 1.5vw;
`;
