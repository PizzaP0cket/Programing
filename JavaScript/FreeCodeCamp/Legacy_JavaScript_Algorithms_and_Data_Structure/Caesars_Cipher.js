function rot13(str) {
  str = str.toLowerCase();
  let newWord = "";
  let test = "";

  for (i in str) {
    newWord += str[i].charCodeAt() - 13;
  }

  return newWord;
}

console.log(rot13("SERR PBQR PNZC"));
