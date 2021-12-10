'use strict';

/*
  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */

let input = null;
while (input === null) {
  input = prompt('enter something');
  //  Data In:    a string or null
  console.log(input);
}
//  Data After:   the first string the user submits
console.log(input);

/* --- make the string excited --- */

//  Data Before:  the user's string
let output = input + '!';
//  Data After:   the same string with an exclamation mark
console.log(output);

/* --- display the string to the user --- */

//  Data Out:  an excited string
alert(output);