/*
  The parameter 'n' is given. Return the difference of 'n' to the number 42.
  The number must be positive. 
*/

// EDIT THIS FUNCTION
function difference42(n) {
  return;
}

// TEST CASES

data = [
  {
    input: 7,
    result: undefined,
    expected: 35,
    completed: false,
  },
  {
    input: 42,
    result: undefined,
    expected: 0,
    completed: false,
  },
  {
    input: 52,
    result: undefined,
    expected: 10,
    completed: false,
  },
  {
    input: 20,
    result: undefined,
    expected: 22,
    completed: false,
  },
  {
    input: 67,
    result: undefined,
    expected: 25,
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = difference42(data[i].input);

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
      ? console.info(`\nTEST CASES: EVERYTHING PASSED, go get yourself a beer!`)
      : console.info(
          `\nTEST CASES:${passed}/${data.length} passed, not quite smoko just yet!`
        );
}

testCase(data); // Call Test Cases with Data
