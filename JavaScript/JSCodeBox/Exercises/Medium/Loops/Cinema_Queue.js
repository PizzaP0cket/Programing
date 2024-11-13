/*
  Given is a number 'max' representing the maximum number of groups in the queue. 
  You also have an array 'visitors' of people, where 'X' stands for one person and 'O' for one companion. 
  A group is minimum one 'O' and any number of 'X'. Check if all groups fit into the queue. 
  Return 'full' if all fit. Otherwise, return the number of groups that are too many or not full.
*/

// EDIT THIS FUNCTION
function cinemaQueue(max, visitors) {
  return;
}

// TEST CASES

data = [
  {
    max: 6,
    visitors: ["X", "O", "X", "O", "O", "X", "X", "X", "O", "X"],
    result: undefined,
    expected: "full",
    completed: false,
  },
  {
    max: 6,
    visitors: ["X", "O", "X", "O", "O", "X", "X", "X", "O", "X", "X", "X"],
    result: undefined,
    expected: "too much: 2",
    completed: false,
  },
  {
    max: 4,
    visitors: ["X", "O", "X"],
    result: undefined,
    expected: "not full: 2",
    completed: false,
  },
  {
    max: 8,
    visitors: ["X", "O", "X", "X"],
    result: undefined,
    expected: "not full: 5",
    completed: false,
  },
  {
    max: 5,
    visitors: ["X", "O", "X", "O", "O", "X", "X", "O", "X"],
    result: undefined,
    expected: "full",
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = cinemaQueue(data[i].max, data[i].visitors);

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
