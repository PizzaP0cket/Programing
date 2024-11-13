/*
  A string 'string' is given. Replace every occurrence of the word 'bug' with the word 'flower'.
*/

function bugFix(string) {
  // Use the replace method to find all occurrences of "bug" in the string
  return string.replace(/bug/g, "flower");
  // The regular expression /bug/g searches for "bug" globally (everywhere in the string)
  // It replaces each occurrence with "flower"
}
