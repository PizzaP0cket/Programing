/**
  Code a for loop that runs through all numbers from 0-99 and append all numbers divisible by seven into a string. 
  Return this string.
 */

function easyLoop() {
  let num = "";
  for (let i = 0; i < 100; i++) {
    if (i % 7 == 0) {
      num += i;
    }
  }
  return num;
}
