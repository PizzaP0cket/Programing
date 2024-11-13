/*
    A string 'sentence' is given. Return 'true' if the block starts with "Hello".
*/

// EDIT THIS FUNCTION
function firstHello(sentence) {
  return;
}

// TEST CASES

data = [
  {
    sentence: "Hello world!",
    result: undefined,
    expected: true,
    completed: false,
  },
  {
    sentence: "Whats up?",
    result: undefined,
    expected: false,
    completed: false,
  },
  {
    sentence: "Hello, how are you?",
    result: undefined,
    expected: true,
    completed: false,
  },
  {
    sentence: "No.",
    result: undefined,
    expected: false,
    completed: false,
  },
  {
    sentence: "Hell, yeah!",
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
    value = data[i].result = firstHello(data[i].sentence);

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
