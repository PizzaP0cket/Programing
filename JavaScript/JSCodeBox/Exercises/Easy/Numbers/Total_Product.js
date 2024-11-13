/*
  Two numbers are given 'a' and 'b'. Return their sum. 
  If both numbers are equal, return their product.
*/

// EDIT THIS FUNCTION
function totalProduct(a, b) {
  return;
}

// TEST CASES

data = [
  {
    inputA: 2,
    inputB: 0,
    result: undefined,
    expected: 2,
    completed: false,
  },
  {
    inputA: 7,
    inputB: 7,
    result: undefined,
    expected: 49,
    completed: false,
  },
  {
    inputA: 1,
    inputB: 2,
    result: undefined,
    expected: 3,
    completed: false,
  },
  {
    inputA: 8,
    inputB: 6,
    result: undefined,
    expected: 14,
    completed: false,
  },
  {
    inputA: 3,
    inputB: 3,
    result: undefined,
    expected: 9,
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = totalProduct(data[i].inputA, data[i].inputB);

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
