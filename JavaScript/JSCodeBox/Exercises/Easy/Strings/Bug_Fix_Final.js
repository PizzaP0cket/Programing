/*
  A string string is given. Remove any occurrence of 'bug' by 'flower'. 
  Attention: 'bug' can occur several times in the string.
*/

// EDIT THIS FUNCTION
function bugFixFinal(string) {
  return;
}

// TEST CASES

data = [
  {
    input: "xxbugYYX",
    result: undefined,
    expected: "xxflowerYYX",
    completed: false,
  },
  {
    input: "bug",
    result: undefined,
    expected: "flower",
    completed: false,
  },
  {
    input: "xxbugXbugbugYYy",
    result: undefined,
    expected: "xxflowerXflowerflowerYYy",
    completed: false,
  },
  {
    input: "bugXYYbugxX",
    result: undefined,
    expected: "flowerXYYflowerxX",
    completed: false,
  },
  {
    input: "xxxYYYzbugzyx",
    result: undefined,
    expected: "xxxYYYzflowerzyx",
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = bugFixFinal(data[i].input);

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
