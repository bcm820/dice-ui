import React from 'react';
import { Row } from '../../common/styles';
import {
  CardContainer,
  IconColumn,
  Icon,
  NewsColumn,
  Name,
  UsernameWithDate,
  StyledMarkdown
} from './styles';

const Card = ({ id, event, username, imageUrl, repo, date, content }) => (
  <CardContainer>
    <Row>
      <IconColumn>
        <Icon width={'100%'} src={imageUrl} alt={``} />
      </IconColumn>
      <NewsColumn>
        <Row>
          <Name>{username}</Name>
          <span>&nbsp;</span>
          <UsernameWithDate>
            {repo} · {date}
          </UsernameWithDate>
        </Row>
        <Row>
          <StyledMarkdown source={`${event}: ${content}`} />
        </Row>
      </NewsColumn>
    </Row>
  </CardContainer>
);

export default Card;
