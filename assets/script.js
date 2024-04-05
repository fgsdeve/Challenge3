const addEmployeesBtn = document.querySelector('#add-employees-btn'); 
//I started by fixing a bugg here i changed add-employesss-bt to employees


// Collect Employess data
  function collectEmployees() {
  const employees = [];

  let addingEmployees = true;

  while (addingEmployees) {

// I used prompt Method here to display a dialog message,
// and bellow the instrings and function.
  let firstName = prompt("Enter First Name");
  let lastName = prompt("Enter Last Name");  
  let salaryInput = prompt("Enter Salary");

  if (isNaN(parseInt(salaryInput))) {
    salaryInput = 0;
} else {
    salaryInput = parseInt(salaryInput);
}

employees.push({

  firstName: firstName,
  lastName: lastName,
  salary: salaryInput

});
     
  const continueInput = confirm ("Do you want to add another Employess?"); 
  if (!continueInput) {
  addingEmployees = false;
    }
}
return employees;

}



// Display the average salary
const displayAverageSalary = function(employees) {
  // I used let as variable declaration, as the value of the variable may change over time. 

  let Salary = 0;

    employees.forEach(employees => {
        Salary += employees.salary;
    });

    const averageSalary = Salary / employees.length;

    console.log(`Average Salary: $${averageSalary.toFixed(2)} for ${employees.length} employees.`);
};


// Select a random Employess //   
// I used Math method here to  display a random Employess
const  getRandomEmployee= function(employees) {

  return Math.floor(Math.random() * employees);
}

console.log( getRandomEmployee(3));

console.log( getRandomEmployee(2));

console.log( getRandomEmployee());


/*
  ====================
  STARTER CODE // ++++++++++
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);//employesss

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);