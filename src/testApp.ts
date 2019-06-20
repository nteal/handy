import handy from './lib/index';

console.log(handy.isFalsy(null, 1));

const testObj = { 'test': 'foundTest!', nextLevel: { test: 'foundTest!', deeper: { deeper: { deepest: true } } } }
const timerLabel = 'containsKeys'
console.time(timerLabel);
console.log(!handy.containsKeys(testObj, 'false')) // should be false
console.log(handy.containsKeys(testObj, 'test')) // should be true
console.log(handy.containsKeys(testObj, 'test', 'nextLevel.test')) // should be true
console.log(handy.containsKeys(testObj, 'test', 'nextLevel.test', 'nextLevel.deeper.deeper.deepest')) // should be true
console.log(!handy.containsKeys(testObj, 'test', 'nextLevel.test', 'false')) // should be false
console.log(!handy.containsKeys(testObj, 'test.test.test.test')) // should be false
console.timeEnd(timerLabel);