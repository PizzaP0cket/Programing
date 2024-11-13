/*
  Given is an array 'n' with integers. 
  Return true if it contains more four than zero.
*/

// WORK IN PROGRESS

// EDIT THIS FUNCTION
function more4than0(n) {
  return;
}

// TEST CASES

data = [
  {
    input: [1, 4, 0],
    result: undefined,
    expected: false,
    completed: false,
  },
  {
    input: [3, 1, 4, 4, 4, 4, 1],
    result: undefined,
    expected: true,
    completed: false,
  },
  {
    input: [4, 0, 4, 0],
    result: undefined,
    expected: false,
    completed: false,
  },
  {
    input: [],
    result: undefined,
    expected: false,
    completed: false,
  },
  {
    input: [4],
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
    value = data[i].result = more4than0(data[i].input);

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
    console.log(
      passed == data.length
        ? `\nTEST CASES: EVERYTHING PASSED, go get yourself a beer!`
        : `\nTEST CASES:${passed}/${data.length} passed, not quite smoko just yet!`
    );
}

testCase(data); // Call Test Cases with Data
