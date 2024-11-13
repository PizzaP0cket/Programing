/*
  A string 'string' is given. Remove any occurrence of 'bug' by 'flower'. 
  Attention: 'bug' can occur several times in the string.
*/

function bugFixFinal(string) {
  // Use the replace method to find all occurrences of "bug" in the string
  return string.replace(/bug/g, "flower");
  // The regular expression /bug/g searches for "bug" globally (everywhere in the string)
  // It replaces each occurrence with "flower"
}
