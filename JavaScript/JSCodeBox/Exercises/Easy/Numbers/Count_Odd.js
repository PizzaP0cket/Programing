/*
  Given is an array 'numbers'. Return the number of odd numbers.
*/

/* WORK IN PROGRESS */

// EDIT THIS FUNCTION
function countOdds(numbers) {
  return;
}

// TEST CASES

data = [
  {
    input: [1, 5, 2, 6, 5, 3, 9, 2],
    result: undefined,
    expected: 5,
    completed: false,
  },
  {
    input: [2, 6, 2, 5, 2, 8],
    result: undefined,
    expected: 1,
    completed: false,
  },
  {
    input: [1, 1],
    result: undefined,
    expected: 2,
    completed: false,
  },
  {
    input: [0],
    result: undefined,
    expected: 0,
    completed: false,
  },
  {
    input: [6, 3, 8, 2],
    result: undefined,
    expected: 1,
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = countOdds(data[i].input);

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
