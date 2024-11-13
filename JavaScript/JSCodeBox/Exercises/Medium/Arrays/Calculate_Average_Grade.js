/*
  Write a JavaScript function that calculates the average grade of a student based on the scores they achieved in different subjects. 
  Given is the array 'scores'. Return the calculated average rounded to two decimal places. 
  The length of the array will be at least 1.
*/

// EDIT THIS FUNCTION
function calculateAverageGrade(scores) {
  return;
}

// TEST CASES

data = [
  {
    scores: [85, 90, 92, 88, 76],
    result: undefined,
    expected: 86.2,
    completed: false,
  },
  {
    scores: [50, 100, 0],
    result: undefined,
    expected: 50,
    completed: false,
  },
  {
    scores: [100],
    result: undefined,
    expected: 100,
    completed: false,
  },
  {
    scores: [70.5, 85.25, 90.75],
    result: undefined,
    expected: 82.17,
    completed: false,
  },
  {
    scores: [10, 40, 34, 76, 2],
    result: undefined,
    expected: 32.4,
    completed: false,
  },
  {
    scores: [70, 65, 80, 75, 88, 92, 78, 85],
    result: undefined,
    expected: 79.13,
    completed: false,
  },
  {
    scores: [60, 70, 80, 90, 100],
    result: undefined,
    expected: 80,
    completed: false,
  },
  {
    scores: [88.5, 92.3, 76.8, 89.1, 95.7],
    result: undefined,
    expected: 88.48,
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = calculateAverageGrade(data[i].scores);

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
