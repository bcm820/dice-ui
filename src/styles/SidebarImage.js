import styled from 'styled-components';
import { Image } from 'spectacle';

const SidebarImage = styled(Image).attrs(_ => ({
  width: 400
}))`
  ${({ isLogo }) =>
    !isLogo &&
    `
    border: 2px solid;
    border-radius: 50%;
  `};
`;

export default SidebarImage;
