/*
  Given is an array 'chars' with different letters. 
  Return the array in reverse order. 
*/

// EDIT THIS FUNCTION
function reverseLetters(chars) {
  return;
}

// TEST CASES

data = [
  {
    input: ["b", "d", "x", "p", "c"],
    result: undefined,
    expected: ["c", "p", "x", "d", "b"],
    completed: false,
  },
  {
    input: ["a", "r", "s", "t", "j", "e", "e", "a", "y"],
    result: undefined,
    expected: ["y", "a", "e", "e", "j", "t", "s", "r", "a"],
    completed: false,
  },
  {
    input: ["a", "r"],
    result: undefined,
    expected: ["r", "a"],
    completed: false,
  },
  {
    input: [],
    result: undefined,
    expected: [],
    completed: false,
  },
  {
    input: ["f"],
    result: undefined,
    expected: ["f"],
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = reverseLetters(data[i].input);

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
