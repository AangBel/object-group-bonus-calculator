// array of employee objects
const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

console.log("array of employee data: ", employees);

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//

console.log(employees);

// let totalCompensation = 0;
const resultTotalCompensationArray = [];

function calculateIndividualEmployeeBonus() {
for (let i = 0; i < employees.length; i++) {
    if (employees[i].reviewRating > 3) {
    console.log(
        employees[i],
        "- does not receive a bonus due to a low rating"
    );
    } else if (employees[i].reviewRating === 3) {
    resultTotalCompensationArray.push([
        employees[i].name,
        (employees[i].annualSalary *= 0.4),
    ]);
    console.log("0.4 is working");
    console.log(
        employees[i].name,
        "gets a total comp of",
        console.log(resultTotalCompensationArray[resultTotalCompensationArray.length - 1])
    );
    } else if (employees[i].reviewRating === 4) {
    resultTotalCompensationArray.push([
        employees[i].name,
        (employees[i].annualSalary *= 0.6),
    ]);
      // console.log("0.6 is working");
    console.log(
        employees[i].name,
        "gets a total comp of",
        resultTotalCompensationArray[resultTotalCompensationArray.length - 1]
    );
    } else if (employees[i].reviewRating === 5) {
    resultTotalCompensationArray.push([
        employees[i].name,
        (employees[i].annualSalary *= 1),
    ]);
      // console.log("0.10 is working");
    console.log(
        employees[i].name,
        "gets a total comp of",
        resultTotalCompensationArray[resultTotalCompensationArray.length - 1]
    );
    }
}
}

calculateIndividualEmployeeBonus();

console.log(resultTotalCompensationArray);

function calculateIndividualEmployeeBonus(employee) {
  // your logic here
  // return new object with bonus results
}
