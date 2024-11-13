/*
  Given is a number 'price' and a number 'discount'. 
  Return the calculated discounted price. 
  Round to two decimal places.
*/

// EDIT THIS FUNCTION
function getReducedPrice(price, discount) {
  let calDiscount = price - price * (discount / 100);
  return Math.round(calDiscount * 100) / 100;
}

// TEST CASES

data = [
  {
    price: 1000,
    discount: 20,
    result: undefined,
    expected: 800,
    completed: false,
  },
  {
    price: 99,
    discount: 10,
    result: undefined,
    expected: 89.1,
    completed: false,
  },
  {
    price: 42,
    discount: 3,
    result: undefined,
    expected: 40.74,
    completed: false,
  },
  {
    price: 499.95,
    discount: 15,
    result: undefined,
    expected: 424.96,
    completed: false,
  },
  {
    price: 3.99,
    discount: 80,
    result: undefined,
    expected: 0.8,
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = getReducedPrice(data[i].price, data[i].discount);

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
