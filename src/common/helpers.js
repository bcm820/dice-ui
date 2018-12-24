import lodashPartition from 'lodash.partition';
import { parse, format } from 'date-fns';

export const partition = lodashPartition;
export const parseDate = parse;
export const fmtDate = format;

export const getWordLength = str => str.split(' ').length;

export const ellipsis = (str, limit) => {
  const words = str.split(' ');
  return words.length < limit ? str : `${words.slice(0, limit).join(' ')}...`;
};

export const getRandom = arr =>
  arr.length ? arr[Math.round(Math.random() * (arr.length - 1))] : null;

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const titleToSentence = (str, acc = '') => {
  const upperIdx = str.substring(1).search(/[A-Z]/);
  return upperIdx === -1
    ? `${acc} ${str}`.replace('Event', '').trim()
    : titleToSentence(
        str.substring(upperIdx + 1),
        `${acc} ${str.substring(0, upperIdx + 1)}`
      );
};
