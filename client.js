let employeeList = [];
let totalMonthly = 0;
console.log("js loaded");

$(handleStart);

function handleStart() {
  console.log("jQuery loaded!");

  //click listeners
  $(`#addEmployee`).on(`click`, addEmployee);
  $(`#bodyTarget`).on(`click`, `#removeButton`,removeEmployee);
  //clear inputs
}

function addEmployee(){
  //get information from inputs
  console.log('add employee button working!');

  //create object of employee to store employee information
  const employee = {
    firstName: $(`#firstNameInput`).val(),//assign values of inputs to individual fields
    lastName: $(`#lastNameInput`).val(),
    id:$(`#idInput`).val(),
    jobTitle:$(`#jobTitleInput`).val(),
    annualSalary:$(`#salaryInput`).val(),
  }

//test employee storage -complete
  console.log(employee);

  employeeList.push(employee);//push object into array
   //store in array

  pushList();//call function to push array onto dom
}

function removeEmployee(){
  $(this).parent().parent().remove();//
}

function pushList(){  //put info on table into dom
  $(`#bodyTarget`).empty(); 
  //clear the dom before iterating over array//
  $(`.totalMonthly`).empty();

  for(let employee of employeeList){
    const employeeSalary = $(employee.annualSalary);

    const employeeInfo = $(
      `<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.annualSalary}</td>
        <td><button id="removeButton" class="button">Remove</button></td>
      </tr>
      `);
      $(`#bodyTarget`).append(employeeInfo);//add object to each row during loop
  }
}





