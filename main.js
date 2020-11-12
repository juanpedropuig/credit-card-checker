// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// When truthy, array contains digits of a valid credit cars number.
const validateCred = arr => {
  // Drops the last number of the array.
  const lastNumber = arr.pop();
  const reversedArr = [];
  
  // Reverse array and multiply by 2 every other number.
  for (let i=arr.length-1;i>=0;i--) {
    if (i % 2 === 0) {
      let doubledValue = arr[i] * 2;
      if (doubledValue > 9) {
        doubledValue -= 9;
        reversedArr.push(doubledValue);
      } else {
        reversedArr.push(doubledValue);
      }
    } else {
      reversedArr.push(arr[i]);
    }
  }
  // Summed all numbers together.
  const reducedArr = reversedArr.reduce((acc, currVal) => acc + currVal) + lastNumber;
  if (reducedArr % 10 === 0) {
    return true;
  } else {
    return false;
  }
};


// Checks through nested arrays and returns invalid numbers.
const findInvalidCards = nestedArr => {
  const invalidNested = [];
  // Pushes to the invalidNested the arrays that are falsy.
  nestedArr.forEach(arr => {
    if (!validateCred(arr)) {
      invalidNested.push(arr);
    }
  });

  return invalidNested;
};



// Identifies the credit card companies that issued these faulty numbers.
const idInvalidCardCompanies = invalidNestedArr => {
  const invalidCompanies = [];

  // Checks the first number of the arrays to identify the company.
  invalidNestedArr.forEach(arr => {
    switch (arr[0]) {
      case 3:
        // Checks if the company was already added to the array so they won't duplicate.
        const amex = invalidCompanies.indexOf('Amex');
        if (amex === -1) {
          invalidCompanies.push('Amex');
        }
        break;
      case 4:
        const visa = invalidCompanies.indexOf('Visa');
        if (visa === -1) {
          invalidCompanies.push('Visa');
        }
        break;
      case 5:
        const mastercard = invalidCompanies.indexOf('Mastercard');
        if (mastercard === -1) {
          invalidCompanies.push('Mastercard');
        }
        break;
      case 6:
        const discover = invalidCompanies.indexOf('Discover');
        if (discover === -1) {
          invalidCompanies.push('Discover');
        }
        break;
      default:
        console.log('Company not found.');
    }
  });

  return invalidCompanies;
};






// Converts a string of credit card numbers into an array.
const convertStringIntoArray = str => {
  // Divides a string into individual numbers inside quotes.
  const creditCardArray = str.split('');
  const parsed = [];

  // Iterates through the array converting each string value into integer.
  creditCardArray.forEach(val => {
    const parsedValue = parseInt(val);
    parsed.push(parsedValue);
  });

  return parsed;
}


// New Visa credit card numbers to validate.
const visa1 = '4974616062367815';
const visa2 = '4916350537834925';
const visa3 = '4929713285693076888';

// New Mastercard credit card numbers to validate.
const mastercard1 = '5430170737128330';
const mastercard2 = '5251128771524703';
const mastercard3 = '5314596775727156';

const secondBatch = [visa1, visa2, visa3, mastercard1, mastercard2, mastercard3];

// Converts batch of string arrays into batch of integer arrays.
const convertingBatch = nestedArr => {
  const convertedArrays = [];
  
  // Iterates through arrays inside the nestedArr to convert them into integer arrays.
  nestedArr.forEach(arr => {
    const newArr = convertStringIntoArray(arr);
    convertedArrays.push(newArr);
  })

  return convertedArrays;
}

// Converted secondBatch into integers.
const convertedSecondBatch = convertingBatch(secondBatch);





