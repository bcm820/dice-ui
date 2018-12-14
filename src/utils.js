export const getWordLength = str => str.split(' ').length;

export const ellipsis = (str, limit) => {
  const words = str.split(' ');
  return words.length < limit ? str : `${words.slice(0, limit).join(' ')}...`;
};

export const getRandom = arr =>
  arr[Math.round(Math.random() * (arr.length - 1))];

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
