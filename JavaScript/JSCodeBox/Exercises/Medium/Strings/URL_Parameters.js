/*
  A string 'url' is given. Return the parameter values in an array. The keys can be ignored.
*/

// EDIT THIS FUNCTION
function getURLParams(url) {
  const urlObj = new URL(url);

  const values = [];

  for (const value of urlObj.searchParams.values()) {
    values.push(value);
  }

  return values;
}

// TEST CASES

data = [
  {
    url: "https://jscodebox.com/test.xml?id=3&value=file",
    result: undefined,
    expected: ["3", "file"],
    completed: false,
  },
  {
    url: "https://jscodebox.com/",
    result: undefined,
    expected: [],
    completed: false,
  },
  {
    url: "https://jscodebox.com/index.php?kex=Jfs873nj&id=1&action=delete",
    result: undefined,
    expected: ["Jfs873nj", "1", "delete"],
    completed: false,
  },
  {
    url: "https://jscodebox.com/delete.php?api_key=njkASF5",
    result: undefined,
    expected: ["njkASF5"],
    completed: false,
  },
  {
    url: "https://jscodebox.com/?action=new&user_id=3&force=false",
    result: undefined,
    expected: ["new", "3", "false"],
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = getURLParams(data[i].url);

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
