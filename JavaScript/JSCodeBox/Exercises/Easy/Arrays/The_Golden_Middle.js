/*
  Given are two arrays 'a' and 'b', both have three elements. 
  Return a new array of length 2 containing both middle (index 1) elements of the arrays.
*/

// EDIT THIS FUNCTION
function goldenMiddle(a, b) {
  return;
}

// TEST CASES

data = [
  {
    inputA: [1, 6, 8],
    inputB: [4, 6, 2],
    result: undefined,
    expected: [6, 6],
    completed: false,
  },
  {
    inputA: [4, 7, 2],
    inputB: [2, 6, 4],
    result: undefined,
    expected: [7, 6],
    completed: false,
  },
  {
    inputA: [2, 6, 1],
    inputB: [2, 2, 5],
    result: undefined,
    expected: [6, 2],
    completed: false,
  },
  {
    inputA: [9, 2, 5],
    inputB: [6, 7, 6],
    result: undefined,
    expected: [2, 7],
    completed: false,
  },
  {
    inputA: [1, 7, 3],
    inputB: [5, 6, 3],
    result: undefined,
    expected: [7, 6],
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = goldenMiddle(data[i].inputA, data[i].inputB);

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
