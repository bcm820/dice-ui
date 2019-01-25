import styled from 'styled-components';
import { Text, Heading } from 'spectacle';

export const SectionHeading = styled(Text).attrs(_ => ({
  textAlign: 'left',
  caps: true
}))`
  letter-spacing: 0.05em;
  opacity: 0.7;
  ${({ sidebar }) => sidebar && `font-size: 2vw`};
`;

export const GreenHeading = styled(Heading).attrs(({ size }) => ({
  textAlign: 'left',
  textColor: 'tertiary',
  size: size || 5
}))`
  text-shadow: 0.7px 0.7px black;
`;
