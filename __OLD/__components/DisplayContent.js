import React from 'react';
import { PaddingTopBottom } from '../styles/Dividers';
import { GreenHeading } from '../styles/Headings';
import ReactMarkdown from 'react-markdown';

const DisplayContent = ({ heading, subHeading, content }) => (
  <PaddingTopBottom>
    <GreenHeading>{heading}</GreenHeading>
    <GreenHeading size={6}>{subHeading}</GreenHeading>
    <ReactMarkdown
      source={`<div style="text-align: left">${content}</div>`}
      escapeHtml={false}
    />
  </PaddingTopBottom>
);

export default DisplayContent;
