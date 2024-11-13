/*
  Given is a JSON string 'json'. 
  Convert this string into an object and return the parameter 'title' of the created object.
*/

// EDIT THIS FUNCTION
function json2Object(json) {
  return;
}

// TEST CASES

data = [
  {
    json: '{"title": "JSCodebox", "category": "2"}',
    result: undefined,
    expected: "JSCodebox",
    completed: false,
  },
  {
    json: '{"headline": "Test", "title": "JSON", "category": "4"}',
    result: undefined,
    expected: "JSON",
    completed: false,
  },
  {
    json: '{"params": "none", "title": "Foobar"}',
    result: undefined,
    expected: "Foobar",
    completed: false,
  },
  {
    json: '{"title": "", "hidden": "yes"}',
    result: undefined,
    expected: "",
    completed: false,
  },
  {
    json: '{"title": "0"}',
    result: undefined,
    expected: "0",
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = json2Object(data[i].json);

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
