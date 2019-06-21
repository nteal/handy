import handy from './lib/index';

console.log(handy.isFalsy(null, 1));

const testObj = { 'test': 'foundTest!', nextLevel: { test: 'foundTest!', deeper: { deeper: { deepest: true } } } }

console.log(!handy.containsKeys(testObj, 'false')) // should be false
console.log(handy.containsKeys(testObj, 'test')) // should be true
console.log(handy.containsKeys(testObj, 'test', 'nextLevel.test')) // should be true
console.log(handy.containsKeys(testObj, 'test', 'nextLevel.test', 'nextLevel.deeper.deeper.deepest')) // should be true
console.log(!handy.containsKeys(testObj, 'test', 'nextLevel.test', 'false')) // should be false
console.log(!handy.containsKeys(testObj, 'test.test.test.test')) // should be false

console.log(handy.safeVal(testObj, 'notFound') === null) //defaults to null
console.log(handy.safeVal(testObj, 'notFound', 'not found') === 'not found') //accepts defaultVal
console.log(handy.safeVal(testObj, 'test', 'not found') === testObj.test) //returns value if found
console.log(handy.safeVal(testObj, 'nextLevel.deeper.deeper.deepest', 'not found') === testObj.nextLevel.deeper.deeper.deepest) //returns nested value if found
