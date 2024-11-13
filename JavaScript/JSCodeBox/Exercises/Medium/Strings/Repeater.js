/*
  Given is a 'String' string and a number 'n'. 
  Return a string with the section from 0 to 'n' in a row. In each run n is to be decremented.
*/

// EDIT THIS FUNCTION
function repeater(string, n) {
  return;
}

// TEST CASES

data = [
  {
    string: "JSCodebox",
    n: 6,
    result: undefined,
    expected: "JSCodeJSCodJSCoJSCJSJ",
    completed: false,
  },
  {
    string: "Foobar",
    n: 2,
    result: undefined,
    expected: "FoF",
    completed: false,
  },
  {
    string: "",
    n: 2,
    result: undefined,
    expected: "",
    completed: false,
  },
  {
    string: "Hello coder!",
    n: 5,
    result: undefined,
    expected: "HelloHellHelHeH",
    completed: false,
  },
  {
    string: "Hi",
    n: 3,
    result: undefined,
    expected: "HiHiH",
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = repeater(data[i].string, data[i].n);

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
