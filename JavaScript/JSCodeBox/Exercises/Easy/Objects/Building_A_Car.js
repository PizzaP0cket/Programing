/*
    Create an object with the following characteristics: 
        4 wheels (named wheels as integer), 
        100PS power (named power and integer), 
        3 doors (named doors as integer). 
        Return the built car.
*/

// EDIT THIS FUNCTION
function buildingACar() {
  return;
}

// TEST CASES

data = [
  {
    result: undefined,
    expected: '{"wheels":4,"power":100,"doors":3}',
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = JSON.stringify(buildingACar());

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
