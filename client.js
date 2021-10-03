let employeeList = [];
let totalMonthly = 0;
console.log("js loaded");

$(handleStart);

function handleStart() {
  console.log("jQuery loaded!");

  //click listeners
  $(`#addEmployee`).on(`click`, addEmployee);
  $(`#bodyTarget`).on(`click`, `#removeButton`, removeEmployee);
  //clear inputs
}

function addEmployee() {
  //get information from inputs
  console.log("add employee button working!");

  //create object of employee to store employee information
  const employee = {
    firstName: $(`#firstNameInput`).val(), //assign values of inputs to individual fields
    lastName: $(`#lastNameInput`).val(),
    id: $(`#idInput`).val(),
    jobTitle: $(`#jobTitleInput`).val(),
    annualSalary: $(`#salaryInput`).val()
  };

  //test employee storage -complete
  console.log(employee);

  employeeList.push(employee); //push object into array
  //store in array

  updateTable(); //call function to push array onto dom
}

function removeEmployee() {
  let indexBar = $(this).closest('tr').index();
  employeeList.splice(indexBar, 1);
  $(this).parent().parent().remove(); //
}

function updateTable() {
  //put info on table into dom
  $(`#bodyTarget`).empty();
  //clear the dom before iterating over array//
  $(`.totalMonthly`).empty();
  let totalMonthly = 0; //create running total
  for (let employee of employeeList) {
    const employeeMonthlySalary = ((employee.annualSalary)/12); //assign each salary to variable
    totalMonthly += employeeMonthlySalary; //add value to running total
    const employeeInfo = $(
      `<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.jobTitle}</td>
        <td>${formatCurrency(employee.annualSalary)}</td>
        <td><button id="removeButton" class="button">Remove</button></td>
      </tr>
      `
    );
    $(`#bodyTarget`).append(employeeInfo); //add object to each row during loop
    // alert("Hello! Test");
  }
  $(`.totalMonthly`).text(formatCurrency(totalMonthly)); //replace value to class
}


function formatCurrency(number) {
  return new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
  }).format(number);
}