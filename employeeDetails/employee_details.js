const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];

     // Function to display all employees
const displayEmployees=() =>{ 
    totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - ${employee.salary}</p>`).join('');
    return    document.getElementById('employeesDetails').innerHTML = totalEmployees;
    
}

function calculateTotalSalaries(){
 const totalsalaries = employees.reduce((sum,e)=>sum+=e.salary,0)   
 console.log(totalsalaries)
return document.getElementById('displaySalaries').innerHTML= `<p>Total Salary: ${totalsalaries}</p>`;
}
function displayHREmployees(){
    const hrEmployee = employees.filter((e)=> e.department === 'HR')
    console.log(hrEmployee)
    return document.getElementById('displayHR').innerHTML = hrEmployee.map((emp)=>`<p>${emp.id}: ${emp.name}: ${emp.age} - ${emp.department} - ${emp.salary}</p>`);    
}


function findEmployeeById (id) {
    const findEmp = employees.find((e)=>e.id === id)
    console.log(findEmp)
    return findEmp?  document.getElementById('findEmployee').innerHTML=`<p>${findEmp.id}: ${findEmp.name}: ${findEmp.age} - ${findEmp.department} - ${findEmp.salary}</p>`:
                     document.getElementById('findEmployee').innerHTML = `<p>No Record Found</p>`;
}    