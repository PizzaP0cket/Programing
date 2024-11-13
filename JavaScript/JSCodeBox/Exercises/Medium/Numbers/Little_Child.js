/*
  Given are two variables 'child1' and 'child2' with a numeric value between 0 and 99. 
  Return 'true' if a child is between 0 and 14 (0 and 14 inclusive). 
  Return 'false' if both or none in between.
*/

// EDIT THIS FUNCTION
function littleChild(child1, child2) {
  return;
}

// TEST CASES

data = [
  {
    child1: 4,
    child2: 15,
    result: undefined,
    expected: true,
    completed: false,
  },
  {
    child1: 9,
    child2: 7,
    result: undefined,
    expected: false,
    completed: false,
  },
  {
    child1: 21,
    child2: 20,
    result: undefined,
    expected: false,
    completed: false,
  },
  {
    child1: 0,
    child2: 3,
    result: undefined,
    expected: false,
    completed: false,
  },
  {
    child1: 15,
    child2: 13,
    result: undefined,
    expected: true,
    completed: false,
  },
  {
    child1: -3,
    child2: 11,
    result: undefined,
    expected: true,
    completed: false,
  },
  {
    child1: -5,
    child2: -11,
    result: undefined,
    expected: false,
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = littleChild(data[i].child1, data[i].child2);

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
