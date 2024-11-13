/*
  Given is a string 'item', with an item and a price in brackets. Return the price.
*/

// EDIT THIS FUNCTION
function getPrice(item) {
  return;
}

// TEST CASES

data = [
  {
    item: "ice ($4.20)",
    result: undefined,
    expected: "$4.20",
    completed: false,
  },
  {
    item: "Sandwich ($3.50)",
    result: undefined,
    expected: "$3.50",
    completed: false,
  },
  {
    item: "Milk ($0.99)",
    result: undefined,
    expected: "$0.99",
    completed: false,
  },
  {
    item: "Potatoe salad ($6.50)",
    result: undefined,
    expected: "$6.50",
    completed: false,
  },
  {
    item: "Chips ($1.35)",
    result: undefined,
    expected: "$1.35",
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = getPrice(data[i].item);

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
