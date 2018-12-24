import styled from 'styled-components';

export const PaddingTopBottom = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const PaddingBottom = styled.div`
  padding-bottom: 20px;
`;

export const EmptyBlock = styled.div`
  margin-bottom: ${({ height }) => height || '20px'};
`;
