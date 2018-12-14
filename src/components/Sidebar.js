import React from 'react';

import { Image, Heading, Text } from 'spectacle';

const SlideFooter = ({ heading, subHeading, image, listHeading, list }) => (
  <React.Fragment>
    <Image
      src={image}
      width={400}
      style={{
        border: '2px solid',
        borderRadius: '35%',
        marginBottom: 40
      }}
    />
    <Heading
      size={5}
      textAlign={'left'}
      textColor={'tertiary'}
      style={{ textShadow: '0.7px 0.7px black' }}
    >
      {heading}
    </Heading>
    <Text
      italic
      textAlign={'left'}
      style={{ paddingBottom: 40, fontSize: '1.75vw' }}
    >
      {subHeading}
    </Text>
    <Text
      textAlign={'left'}
      caps
      style={{ letterSpacing: '0.05em', opacity: 0.7, fontSize: '2vw' }}
    >
      {listHeading}
    </Text>
    {list.map(item => (
      <Text key={item} textAlign={'left'} style={{ fontSize: '1.5vw' }}>
        {item}
      </Text>
    ))}
  </React.Fragment>
);

export default SlideFooter;
