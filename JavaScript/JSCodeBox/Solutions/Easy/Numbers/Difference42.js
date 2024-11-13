/*
  The parameter 'n' is given. Return the difference of 'n' to the number 42.
  The number must be positive. 
*/

function difference42(n) {
  let num = 42 - n;
  return num < 0 ? num * -1 : num;
}
