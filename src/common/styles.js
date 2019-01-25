import styled, { css } from 'styled-components';

export const columnStyles = css`
  display: flex;
  flex-direction: column;
`;

export const rowStyles = css`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  ${columnStyles}
`;

export const Row = styled.div`
  ${rowStyles}
`;
