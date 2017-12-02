const {
  isJiraKey,
  containsJiraKey,
  startsWithJiraKey,
  endsWithJiraKey,
  findJiraKeys,
} = require('./index');

describe('isJiraKey', () => {
  const fn = isJiraKey;
  it('matches valid keys', () => {
    expect(fn('BF-18')).toEqual(true);
    expect(fn('X-88')).toEqual(true);
    expect(fn('ABCDEFGHIJKL-999')).toEqual(true);
    expect(fn('ABC-1')).toEqual(true);
  });
  it('does not match invalid keys', () => {
    expect(fn('abc-123')).toEqual(false);
    expect(fn('abc')).toEqual(false);
    expect(fn('XY-Z-333')).toEqual(false);
    expect(fn('abcDEF-33')).toEqual(false);
    expect(fn(' ABC-1')).toEqual(false);
    expect(fn('ABC-1 ')).toEqual(false);
  });
});

describe('containsJiraKey', () => {
  const fn = containsJiraKey;
  it('contains valid keys', () => {
    expect(fn('foo BF-18 bar')).toEqual(true);
    expect(fn('X-88 foobar')).toEqual(true);
    expect(fn('foobar ABCDEFGHIJKL-999')).toEqual(true);
    expect(fn('  ABC-1  ')).toEqual(true);
  });
  it('does not contain valid keys', () => {
    expect(fn('foo abc-123 bar')).toEqual(false);
    expect(fn('abc foobar')).toEqual(false);
    expect(fn('foobar XY-Z-333')).toEqual(false);
    expect(fn('  abcDEF-33  ')).toEqual(false);
  });
});

describe('startsWithJiraKey', () => {
  const fn = startsWithJiraKey;
  it('starts with a jira key', () => {
    expect(fn('BF-18 foobar')).toEqual(true);
    expect(fn('X-88 foobar')).toEqual(true);
  });
  it('does not start with a jira key', () => {
    expect(fn('foobar ABCDEFGHIJKL-999')).toEqual(false);
    expect(fn('foobar ABC-1')).toEqual(false);
  });
});

describe('endsWithJiraKey', () => {
  const fn = endsWithJiraKey;
  it('ends with a jira key', () => {
    expect(fn('foobar ABCDEFGHIJKL-999')).toEqual(true);
    expect(fn('foobar ABC-1')).toEqual(true);
  });
  it('does not end with a jira key', () => {
    expect(fn('BF-18 foobar')).toEqual(false);
    expect(fn('X-88 foobar')).toEqual(false);
  });
});

describe('findJiraKeys', () => {
  const fn = findJiraKeys;
  it('returns valid results', () => {
    expect(
      fn('BF-18 abc-123 X-88 ABCDEFGHIJKL-999 abc XY-Z-333 abcDEF-33 ABC-1')
    ).toEqual(['BF-18', 'X-88', 'ABCDEFGHIJKL-999', 'ABC-1']);
  });
  it('returns empty results if none found', () => {
    expect(fn('abc-123 abc XY-Z-333 abcDEF-33')).toEqual([]);
  });
});
