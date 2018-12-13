const subjects = ['I', 'You', 'Bob', 'John', 'Sue', 'Kate'];
const verbs = ['will search for', 'will get', 'will find'];
const objects = ['Billy', 'an apple', 'a Triforce', 'the treasure'];
const endings = ['.', ', right?', ', like I said.', ', just like your momma!'];

export const generateParagraph = () => {
  let paragraph = '';
  let sentenceAmt = 5;
  while (sentenceAmt > 0) {
    paragraph +=
      subjects[Math.round(Math.random() * (subjects.length - 1))] +
      ' ' +
      verbs[Math.round(Math.random() * (verbs.length - 1))] +
      ' ' +
      objects[Math.round(Math.random() * (objects.length - 1))] +
      endings[Math.round(Math.random() * (endings.length - 1))] +
      ' ';
    sentenceAmt--;
  }
  return paragraph;
};
