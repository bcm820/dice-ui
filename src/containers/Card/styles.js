import styled from 'styled-components';
import { columnStyles } from '../../common/styles';

export const CardContainer = styled.div`
  max-height: 85vh;
  width: 85vw;
  padding: 2vw;
  font-size: 7vh;
  background-color: #f7f9f9;
  margin-bottom: 7px;
  box-shadow: 1.5px 2px #9cb1ae;
`;

export const IconColumn = styled.div`
  ${columnStyles}
  width: 12vw;
  margin: 2vw;
`;
