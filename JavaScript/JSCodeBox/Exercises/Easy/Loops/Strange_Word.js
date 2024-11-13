/*
  Given is a word 'word'. Run through the word and merge every second letter into a new word.
*/

// EDIT THIS FUNCTION
function strangeWord(word) {
  return;
}

// TEST CASES

data = [
  {
    input: "JSCodebox",
    result: undefined,
    expected: "JCdbx",
    completed: false,
  },
  {
    input: "JavaScript",
    result: undefined,
    expected: "JvSrp",
    completed: false,
  },
  {
    input: "Challenge",
    result: undefined,
    expected: "Calne",
    completed: false,
  },
  {
    input: "",
    result: undefined,
    expected: "",
    completed: false,
  },
  {
    input: "maoam",
    result: undefined,
    expected: "mom",
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = strangeWord(data[i].input);

    // Check if expected result is met
    JSON.stringify(value) === JSON.stringify(data[i].expected)
      ? ((data[i].completed = "PASSED"), passed++)
      : (data[i].completed = "FAILED");
  }

  data.sort((a, b) => {
    if (a.completed === "PASSED" && b.completed === "FAILED") return 1;
    if (a.completed === "FAILED" && b.completed === "PASSED") return -1;
    return 0; // Keep original order for the rest
  });

  console.table(data), // Print Test Cases
    passed == data.length
      ? console.log(`\nTEST CASES: EVERYTHING PASSED, go get yourself a beer!`)
      : console.log(
          `\nTEST CASES:${passed}/${data.length} passed, not quite smoko just yet!`
        );
}

testCase(data); // Call Test Cases with Data
