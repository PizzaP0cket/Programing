/*
  Two numbers are given 'a' and 'b'. Return their sum. 
  If both numbers are equal, return their product.
*/

function is42(a, b) {
  return a == 42 || b == 43 ? true : a + b == 42 ? true : false;
}
