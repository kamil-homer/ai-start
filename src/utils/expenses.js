const expenses = {
  "2024-01": {
    "05": {
      shopping: [45.3, 60, 15.8, 5.5, 40.5, 3.8, 25],
      utilities: [180.35],
    },
    15: {
      shopping: [14.5],
      utilities: [175.6],
    },
  },
  "2024-03": {
    "01": {
      shopping: [25, 14.8, 35.1, 15.0],
    },
    "03": {
      shopping: [12.5, 13.75, 3.0],
      utilities: [],
    },
  },
};

export function getDaysUntilFirstSunday(year, month) {
  // Create a date object for the first day of the given month and year
  let date = new Date(year, month - 1, 1);

  // Get the day of the week for the first day of the month
  // Note: getDay() returns 0 for Sunday, 1 for Monday, etc.
  let dayOfWeek = date.getDay();

  // Calculate the number of days until the first Sunday
  // If the first day of the month is a Sunday, return 1
  // Otherwise, return 7 - dayOfWeek + 1
  return dayOfWeek === 0 ? 1 : 7 - dayOfWeek + 1;
}

export function calculateMedian(arr) {
  // Sort the array in ascending order
  arr.sort(function (a, b) {
    return a - b;
  });

  // Get the length of the array
  let length = arr.length;

  // Check if the length of the array is even or odd
  if (length % 2 === 0) {
    // If the length is even, the median is the average of the two middle numbers
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  } else {
    // If the length is odd, the median is the middle number
    return arr[Math.floor(length / 2)];
  }
}

export function getMedianForFirstWeek(expenses) {
  let medians = [];

  // Loop through each month in the expenses object
  for (let month in expenses) {
    // Get the first Sunday of the month
    let firstSunday = getDaysUntilFirstSunday(
      parseInt(month.split("-")[0]),
      parseInt(month.split("-")[1])
    );

    // Get the expenses for the first week of the month
    let firstWeekExpenses = [];
    for (let day = 1; day <= firstSunday; day++) {
      let dayStr = day.toString().padStart(2, "0");
      if (expenses[month][dayStr]) {
        for (let category in expenses[month][dayStr]) {
          firstWeekExpenses = firstWeekExpenses.concat(
            expenses[month][dayStr][category]
          );
        }
      }
    }

    // Calculate the median of the first week expenses
    if (firstWeekExpenses.length > 0) {
      let median = calculateMedian(firstWeekExpenses);
      medians.push(median);
    }
  }

  // Return the medians for all months
  return medians;
}

console.log(getMedianForFirstWeek(expenses));
