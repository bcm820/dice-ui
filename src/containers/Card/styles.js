import styled from 'styled-components';
import { columnStyles } from '../../common/styles';
import Markdown from 'react-markdown';

export const CardContainer = styled.div`
  width: 90vw;
  padding: 2vw;
  font-size: 5vh;
  background-color: #f7f9f9;
  margin-bottom: 7px;
  box-shadow: 1.5px 2px #9cb1ae;
`;

export const IconColumn = styled.div`
  ${columnStyles}
  width: 10vw;
  margin: 1vw;
`;

export const Icon = styled.img`
  border: 1px solid #ffffff;
  border-radius: 50%;
`;

export const NewsColumn = styled.div`
  ${columnStyles}
  margin-left: 1vw;
  margin-right: 2vw;
  margin-top: 0.5vh;
  flex: 1;
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const UsernameWithDate = styled.span`
  color: #cbcccc;
`;

export const StyledMarkdown = styled(Markdown)`
  > p {
    margin: 0px;
    padding: 0px;
    margin-top: 0.5vh;
  }
`;
