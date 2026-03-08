// given data
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];



// 1. Insert new Emp at 2nd position
//using splice() to insert new object at index 2 without deleting anything

employees.splice(1,0,{eno:106,name:"Anooj",marks:[100,100,100]})
console.log("After Inserting new Emp at 2nd position:\n",employees) //printing array after inserting new employe

//2. Remove an emp with name "Kiran"
//using for loop to iterate through employees array
for(let i=0;i<employees.length;i++)
{

   //checking if employee name is "Kiran"
    if(employees[i].name=="Kiran")
    {
        employees.splice(i,1)  //removing 1 element at index i
    }
}

console.log("After Removing an emp with name 'Kiran': \n",employees) //printing array after removing Kiran



//3.Change the last mark 95 to 75 of emp  "Sneha"
//using for loop to search Sneha
for(let i=0;i<employees.length;i++)
{

    if(employees[i].name=="Sneha")
    {
      //using for loop to search for index of Sneha's marks where it is 95
      for(let j=0;j<employees[i].marks.length;j++)
      {
          if(employees[i].marks[j]==95)
            employees[i].marks.splice(j,1,75)   //using splice to replace element at index j i.e"95" with 75
      }
      
    }
}

console.log("After Change the last mark 95 to 75 of emp  'Sneha': \n",employees)//printing final updated employees array
