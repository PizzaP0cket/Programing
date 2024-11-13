/*
  Given is an array 'numbers' with different numbers. 
  Return an array in which the first entry is swapped with the last. 
  The rest remains unchanged.
*/

// EDIT THIS FUNCTION
function swap(numbers) {
  return;
}

// TEST CASES

data = [
  {
    numbers: [1, 5, 3, 7, 2, 7, 3],
    result: undefined,
    expected: [3, 5, 3, 7, 2, 7, 1],
    completed: false,
  },
  {
    numbers: [1, 6, 2, 7, 9, 3, 4],
    result: undefined,
    expected: [4, 6, 2, 7, 9, 3, 1],
    completed: false,
  },
  {
    numbers: [1, 0],
    result: undefined,
    expected: [0, 1],
    completed: false,
  },
  {
    numbers: [1],
    result: undefined,
    expected: [1],
    completed: false,
  },
  {
    numbers: [],
    result: undefined,
    expected: [],
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = swap(data[i].numbers);

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
