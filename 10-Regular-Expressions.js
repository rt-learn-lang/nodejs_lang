console.log('1. Checking match non-null');

const regex = new RegExp('abc');
console.log(regex.test('abc.txt'));


console.log('2. Checking non-match, non-null');
console.log(regex.test('123.txt'));


console.log('3. Checking match null');
console.log(regex.test(null));
