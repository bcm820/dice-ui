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

const Card = ({ imageUrl, name, username, date, content }) => (
  <CardContainer>
    <Row>
      <IconColumn>
        <Icon width={'100%'} src={imageUrl} alt={``} />
      </IconColumn>
      <NewsColumn>
        <Row>
          <Name>{name}</Name>
          <span>&nbsp;</span>
          <UsernameWithDate>
            {username} · {date}
          </UsernameWithDate>
        </Row>
        <Row>
          <StyledMarkdown key={content.substring(0, 10)} source={content} />
        </Row>
      </NewsColumn>
    </Row>
  </CardContainer>
);

export default Card;
