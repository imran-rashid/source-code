// Predict WHAT the output will be and WHY that is the case

console.log("1. 1 + '5'");
console.log(1 + '5'); // '1' + '5' => '15'

console.log("2. 3 - '5'");
console.log(3 - '5'); // 3 - 5 => -2

console.log("3. 'hi' + ' there'");
console.log('hi' + ' there'); // 'hi there'

console.log("4. true * 3");
console.log(true * 3); // 1 * 3 => 3

console.log("5. 'it is ' + true");
console.log('it is ' + true); // 'it is ' + 'true' => 'it is true'

console.log("6. 5 == '5'");
console.log(5 == '5'); // '5' == '5' => true

console.log("7. 0 == false");
console.log(0 == false); // 0 == 0 => true

console.log("8. 'true' == true");
console.log('true' == true); // NaN == true => false
// Boolean('true'), if('true'), !!'true' => true

console.log("9. '' == false");
console.log('' == false); // 0 == 0 => true

console.log("10. '' === false");
console.log('' === false); // '' === false => false

console.log("11. [] + 1");
console.log([] + 1); // '' + 1 => '' + '1' => '1'

console.log("12. [] == false");
console.log([] == false); // '' == false => 0 == 0 => true

console.log("13. Boolean([])");
console.log(Boolean([])); // true

console.log("14. [] == {}");
console.log([] == {}); // false
// [] == [] ==> false because of that primitive/ reference value thing

console.log("15. [] * {}");
console.log([] * {}); // [] = '' = 0, {} = '[object Object]' = NaN => 0 * NaN => NaN

console.log("16. [] * 3");
console.log([] * 3); // '' = 0 => 0 * 3 => 0

console.log("17. {} + ' this works'");
console.log({} + ' this works'); // '[object Object]' * ' this works' => '[object Object] this works'
