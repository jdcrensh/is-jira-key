# is-jira-key

[![NPM version][npm-image]][npm-url] [![Build Status](https://travis-ci.org/jdcrensh/is-jira-key.svg?branch=master)](https://travis-ci.org/jdcrensh/is-jira-key)

> Test that a string is a valid and supported JIRA issue identifier

## Installation

```sh
yarn add is-jira-key
```

## Usage

```js
const isJiraKey = require('is-jira-key')

isJiraKey('BF-18') //=> true
isJiraKey('abc-123') //=> false
isJiraKey('X-88') //=> true
isJiraKey('ABCDEFGHIJKL-999') //=> true
isJiraKey('abc') //=> false
isJiraKey('XY-Z-333') //=> false
isJiraKey('abcDEF-33') //=> false
isJiraKey('ABC-1') //=> true

// or

const {
  isJiraKey,
  containsJiraKey,
  startsWithJiraKey,
  endsWithJiraKey,
  findJiraKeys,
} = require('is-jira-key')

isJiraKey('BF-18') //=> true
containsJiraKey('foo X-88 bar') //=> true
startsWithJiraKey('ABC-1 foobar') //=> true
endsWithJiraKey('foobar ABC-123') //=> true
findJiraKeys('BF-18 foo X-88 bar') //=> ['BF-18', 'X-88']
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/is-jira-key.svg?style=flat
[npm-url]: https://npmjs.org/package/is-jira-key
