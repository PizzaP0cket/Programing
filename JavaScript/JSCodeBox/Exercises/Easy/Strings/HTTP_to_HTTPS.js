/*
  A string string is given. Replace every occurrence of the word 'bug' with the word 'flower'.
*/

// EDIT THIS FUNCTION
function http2https(url) {
  return;
}

// TEST CASES

data = [
  {
    input: "http://jscodebox.com/",
    result: undefined,
    expected: "https://jscodebox.com/",
    completed: false,
  },
  {
    input: "http://jscodebox.com/",
    result: undefined,
    expected: "https://jscodebox.com/",
    completed: false,
  },
  {
    input: "http://jscodebox.com/index.php?id=2",
    result: undefined,
    expected: "https://jscodebox.com/index.php?id=2",
    completed: false,
  },
  {
    input: "http://jscodebox.com:80/home",
    result: undefined,
    expected: "https://jscodebox.com:80/home",
    completed: false,
  },
  {
    input: "http://jscodebox.com:80/home?admin=1&test=0",
    result: undefined,
    expected: "https://jscodebox.com:80/home?admin=1&test=0",
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = http2https(data[i].input);

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
