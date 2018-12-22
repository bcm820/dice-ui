import React from 'react';
import { Image, Heading, Text } from 'spectacle';

const Sidebar = ({
  heading,
  subHeading,
  subText,
  image,
  listHeading,
  list,
  isLogo
}) => (
  <React.Fragment>
    <Image
      src={image}
      width={400}
      style={
        isLogo
          ? { marginBottom: 40 }
          : {
              border: '2px solid',
              borderRadius: '50%',
              marginBottom: 40
            }
      }
    />
    <Heading
      size={5}
      textAlign={'left'}
      textColor={'tertiary'}
      style={{ textShadow: '0.7px 0.7px black' }}
    >
      {heading}
    </Heading>
    {subText && (
      <Text italic textAlign={'left'} style={{ fontSize: '1.75vw' }}>
        {subText}
      </Text>
    )}
    <Text
      italic
      textAlign={'left'}
      style={{ paddingBottom: 40, fontSize: '1.75vw' }}
    >
      {subHeading}
    </Text>
    {list.length ? (
      <Text
        textAlign={'left'}
        caps
        style={{ letterSpacing: '0.05em', opacity: 0.7, fontSize: '2vw' }}
      >
        {listHeading}
      </Text>
    ) : null}
    {list.map((item, i) => (
      <Text key={item + i} textAlign={'left'} style={{ fontSize: '1.5vw' }}>
        {item.replace('DecipherNow/', '')}
      </Text>
    ))}
  </React.Fragment>
);

export default Sidebar;
