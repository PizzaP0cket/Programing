/*
  Given is a decimal number 'dec'. 
  Return this number as a number in the binary number system.
*/

// EDIT THIS FUNCTION
function dec2bin(dec) {
  return;
}

// TEST CASES

data = [
  {
    dec: 50,
    result: undefined,
    expected: 110010,
    completed: false,
  },
  {
    dec: 2,
    result: undefined,
    expected: 10,
    completed: false,
  },
  {
    dec: 1,
    result: undefined,
    expected: 1,
    completed: false,
  },
  {
    dec: 42,
    result: undefined,
    expected: 101010,
    completed: false,
  },
  {
    dec: 51,
    result: undefined,
    expected: 110011,
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = dec2bin(data[i].dec);

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
