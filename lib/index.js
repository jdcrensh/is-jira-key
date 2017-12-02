const JIRA_MATCHER = /\d+-[A-Z]+(?!-?[a-zA-Z]{1,10})/;

const reverse = str =>
  str
    .split('')
    .reverse()
    .join('');

const getMatcher = ({ startOfLine, endOfLine, flags = '' } = {}) => {
  // the input is reversed, so start/end are swapped
  endOfLine = endOfLine ? '^' : '';
  startOfLine = startOfLine ? '$' : '';
  return new RegExp(`${endOfLine}${JIRA_MATCHER.source}${startOfLine}`, flags);
};

const isJiraKey = (str = '') => {
  const matcher = getMatcher({ startOfLine: true, endOfLine: true });
  return matcher.test(reverse(str));
};

isJiraKey.containsJiraKey = (str = '') => {
  const matcher = getMatcher();
  return matcher.test(reverse(str));
};

isJiraKey.startsWithJiraKey = (str = '') => {
  const matcher = getMatcher({ startOfLine: true });
  return matcher.test(reverse(str));
};

isJiraKey.endsWithJiraKey = (str = '') => {
  const matcher = getMatcher({ endOfLine: true });
  return matcher.test(reverse(str));
};

isJiraKey.findJiraKeys = (str = '') => {
  const matcher = getMatcher({ flags: 'g' });
  const m = reverse(str).match(matcher);
  if (m) {
    return m.map(value => reverse(value)).reverse();
  }
  return [];
};

// self-reference for destructure-style import
isJiraKey.isJiraKey = isJiraKey;

module.exports = isJiraKey;
