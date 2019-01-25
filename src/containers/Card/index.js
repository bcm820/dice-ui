import React from 'react';
import { Column, Row } from '../../common/styles';
import { CardContainer, IconColumn } from './styles';

const Card = ({
  imageUrl,
  fullName,
  username,
  date,
  content,
  comments,
  retweets,
  likes
}) => (
  <CardContainer>
    <Row>
      <IconColumn>
        <img width={'100%'} src={imageUrl} alt={``} />
      </IconColumn>
      <Column>Blah!</Column>
    </Row>
  </CardContainer>
);

export default Card;
