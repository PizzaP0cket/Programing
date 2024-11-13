/*
  Three positive numbers are given: 'a', 'b' and 'c'. 
  Return 'true' if at least two of the numbers have the same last digit.
*/

// EDIT THIS FUNCTION
function lastButNotLeast(a, b, c) {
  return;
}

// TEST CASES

data = [
  {
    a: 37,
    b: 17,
    c: 19,
    result: undefined,
    expected: true,
    completed: false,
  },
  {
    a: 84,
    b: 23,
    c: 54,
    result: undefined,
    expected: true,
    completed: false,
  },
  {
    a: 42,
    b: 19,
    c: 96,
    result: undefined,
    expected: false,
    completed: false,
  },
  {
    a: 19,
    b: 17,
    c: 38,
    result: undefined,
    expected: false,
    completed: false,
  },
  {
    a: 1,
    b: 51,
    c: 21,
    result: undefined,
    expected: true,
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = lastButNotLeast(data[i].a, data[i].b, data[i].c);

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
