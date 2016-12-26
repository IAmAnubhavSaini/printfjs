'use strict';

var tests = [
  {
    toTest: sprintf('%%'),
    testedFor: '%',
    description: 'sprintf escapes % with %'
  },
  {
    toTest: sprintf('%d'),
    testedFor: 'NaN',
    description: 'sprintf returns empty string'
  },
  {
    toTest: sprintf('%d', 10),
    testedFor: '10',
    description: 'sprintf returns 10'
  },
  {
    toTest: sprintf('The percentage is %d%%.', 10),
    testedFor: 'The percentage is 10%.',
    description: 'sprintf returns correct string'
  }
];

window.matchstrike.strike(tests, 'printf.test.js');
