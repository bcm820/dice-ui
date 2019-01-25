import React from 'react';
import { SectionHeading, GreenHeading } from '../styles/Headings';
import { TagLine, Item } from '../styles/ContentTypes';
import SidebarImage from '../styles/SidebarImage';
import { PaddingTopBottom, EmptyBlock } from '../styles/Dividers';

const Sidebar = ({ image, isLogo, heading, taglines, content }) => (
  <React.Fragment>
    <SidebarImage src={image} isLogo={isLogo} />
    <EmptyBlock height={'50px'} />
    <GreenHeading>{heading}</GreenHeading>
    {taglines.map((tag, i) => (
      <TagLine key={tag + i}>{tag}</TagLine>
    ))}
    {content.map(({ title, data }, i) => (
      <PaddingTopBottom key={title || i}>
        {title && data.length ? (
          <SectionHeading sidebar>{title}</SectionHeading>
        ) : null}
        {data.map((item, i) => (
          <Item key={item + i}>{item}</Item>
        ))}
      </PaddingTopBottom>
    ))}
  </React.Fragment>
);

export default Sidebar;
