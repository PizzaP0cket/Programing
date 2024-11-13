/*
  Given is an object 'object'. 
  Return a clone of the object except the object properties given in the array 'removeProperties'.
*/

// WORK IN PROGRESS

// EDIT THIS FUNCTION
function cloneObject(object, removeProperties) {
  return;
}

// TEST CASES

data = [
  {
    object: { apples: 7, bananas: 42, citrones: 20, sausages: 2 },
    removeProperties: ["sausages"],
    result: undefined,
    expected: { apples: 7, bananas: 42, citrones: 20 },
    completed: false,
  },
  {
    object: {
      name: "Iron Man",
      age: 42,
      superPower: "None",
      friends: 0,
      overweight: true,
      hungry: true,
    },
    removeProperties: ["overweight", "hungry"],
    result: undefined,
    expected: { name: "Iron Man", age: 42, superPower: "None", friends: 0 },
    completed: false,
  },
  {
    object: { a: 1, z: 25, h: 8, i: 9, d: 4, u: 20, p: 15 },
    removeProperties: [],
    result: undefined,
    expected: { a: 1, z: 25, h: 8, i: 9, d: 4, u: 20, p: 15 },
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = cloneObject(
      data[i].object,
      data[i].removeProperties
    );

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
