/*
  Given is a binary number 'bin'. 
  Return this number as a number in the binimal number system.
*/

// EDIT THIS FUNCTION
function bin2bin(bin) {
  return;
}

// TEST CASES

data = [
  {
    bin: 110010,
    result: undefined,
    expected: 50,
    completed: false,
  },
  {
    bin: 10,
    result: undefined,
    expected: 2,
    completed: false,
  },
  {
    bin: 1,
    result: undefined,
    expected: 1,
    completed: false,
  },
  {
    bin: 101010,
    result: undefined,
    expected: 42,
    completed: false,
  },
  {
    bin: 110011,
    result: undefined,
    expected: 51,
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = bin2bin(data[i].bin);

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
