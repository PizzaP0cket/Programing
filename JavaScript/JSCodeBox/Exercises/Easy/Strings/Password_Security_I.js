/*
  Given are two strings password and password_repeat. Check if the password is secure by the following critera:
    1. both passwords must match
    2. password must be at least 20 chars

  Return true only if all criteria are met, otherwise return false.
*/

// EDIT THIS FUNCTION
function checkPassword(password, password_repeat) {
  return;
}

// TEST CASES

data = [
  {
    password: "0#J#xxQYmD#kx#k#AOK7",
    password_repeat: "0#J#xxQYmD#kx#k#AOK7",
    result: undefined,
    expected: true,
    failedRule: "",
    completed: false,
  },
  {
    password: "gWb8reHTbuo3nbRp5EL625is",
    password_repeat: "gWb8reHTbuo3nbRp5EL625is",
    result: undefined,
    expected: true,
    failedRule: "",
    completed: false,
  },
  {
    password: "qn%5F",
    password_repeat: "qn$5F",
    result: undefined,
    expected: false,
    failedRule: "1",
    completed: false,
  },
  {
    password: "rVrsfheokazBnvcgRnoWMFeUxCqpZsNq",
    password_repeat: "rrsfheokazBnvcgRnoWMFeUxCqpZsNq",
    result: undefined,
    expected: false,
    failedRule: "1",
    completed: false,
  },
  {
    password: "omvdsse",
    password_repeat: "omvdsse",
    result: undefined,
    expected: false,
    failedRule: "2",
    completed: false,
  },
  {
    password: "gizzard-fiesta-dispel-disgorge-never-chisel",
    password_repeat: "gizzard-fiesta-dispel-disgorge-never-chisel",
    result: undefined,
    expected: true,
    failedRule: "2",
    completed: false,
  },
  {
    password: "HUIFDSJHKSADN",
    password_repeat: "HUIFDSJHKSADN",
    result: undefined,
    expected: false,
    failedRule: "2",
    completed: false,
  },
  {
    password: "JoFDd#0MY6Ad4",
    password_repeat: "JoFDd#0MY6Ad4",
    result: undefined,
    expected: false,
    failedRule: "2",
    completed: false,
  },
  {
    password: "JIOfdsf&fdsflk",
    password_repeat: "JIOfdsf&fdsflk",
    result: undefined,
    expected: false,
    failedRule: "2",
    completed: false,
  },
  {
    password: "ono53a7suikzb3h7",
    password_repeat: "ono53a7suikzb3h7",
    result: undefined,
    expected: false,
    failedRule: "2",
    completed: false,
  },
  {
    password: "qn%5F",
    password_repeat: "qn%5F",
    result: undefined,
    expected: false,
    failedRule: "2",
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = checkPassword(
      data[i].password,
      data[i].password_repeat
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
