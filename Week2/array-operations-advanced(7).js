// Test Data
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];



//1. filter() employees from IT department
//using filter() to get employees whose department is IT

const itEmployees = employees.filter(emp => emp.department == "IT")

console.log("Employees from IT department:\n",itEmployees) //printing IT employees



//2. map() to add netSalary (salary + 10% bonus)
//using map() to add netSalary field

const employeesWithNetSalary = employees.map(emp => ({
    ...emp,
    netSalary: emp.salary + (emp.salary * 0.10)   //adding 10% bonus
}))

console.log("Employees with Net Salary:\n",employeesWithNetSalary) //printing employees with bonus



//3. reduce() to calculate total salary payout
//using reduce() to add salary of all employees

const totalSalary = employees.reduce((sum,emp)=>{
    return sum + emp.salary
},0)

console.log("Total Salary Payout:\n",totalSalary) //printing total salary



//4. find() employee with salary 30000
//using find() to search employee whose salary is 30000

const emp30000 = employees.find(emp => emp.salary == 30000)

console.log("Employee with salary 30000:\n",emp30000) //printing employee details



//5. findIndex() of employee "Neha"
//using findIndex() to get index of employee whose name is Neha

const nehaIndex = employees.findIndex(emp => emp.name == "Neha")

console.log("Index of Neha:\n",nehaIndex) //printing index of Neha