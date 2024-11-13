/*
  Given is a obj string 'obj'. 
  Convert this string into an object and return the parameter 'title' of the created object.
*/

// WORK IN PROGRESS

// EDIT THIS FUNCTION
function object2JSON(obj) {
  return obj;
}

// TEST CASES

data = [
  {
    obj: { name: "JSCodebox", release: "yesterday" },
    result: undefined,
    expected: '{"name":"JSCodebox","release":"yesterday"}',
    completed: false,
  },
  {
    obj: {},
    result: undefined,
    expected: "{}",
    completed: false,
  },
  {
    obj: { number: 1, title: "Foobar" },
    result: undefined,
    expected: '{"number":1,"title":"Foobar"}',
    completed: false,
  },
  {
    obj: { headline: "New Headline", date_format: "dd.mm.yyyy" },
    result: undefined,
    expected: '{"headline":"New Headline","date_format":"dd.mm.yyyy"}',
    completed: false,
  },
  {
    obj: { name: "JavaScript Challenge" },
    result: undefined,
    expected: '{"name":"JavaScript Challenge"}',
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = object2JSON(data[i].obj);

    // Check if expected result is met
    obj.stringify(value) === obj.stringify(data[i].expected)
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
