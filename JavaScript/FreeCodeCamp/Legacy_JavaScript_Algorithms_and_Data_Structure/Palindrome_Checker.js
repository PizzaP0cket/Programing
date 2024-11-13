function palindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]+/gi, "");
  const reverseCleanStr = cleanStr.split("").reverse().join("");

  return cleanStr == reverseCleanStr ? true : false;
}

console.log(palindrome("never odd or even"));
