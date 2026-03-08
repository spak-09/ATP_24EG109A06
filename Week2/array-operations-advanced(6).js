// Test Data
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];



//1. filter() students who passed (marks ≥ 40)
//using filter() to get students whose marks are greater than or equal to 40

const passedStudents = students.filter(student => student.marks >= 40)

console.log("Students who passed:\n",passedStudents) //printing students who passed



//2. map() to add a grade field
//using map() to add grade based on marks

const studentsWithGrade = students.map(student => {

    let grade

    if(student.marks >= 90)
        grade = "A"
    else if(student.marks >= 75)
        grade = "B"
    else if(student.marks >= 60)
        grade = "C"
    else
        grade = "D"

    return {
        ...student,
        grade: grade
    }

})

console.log("Students with grades:\n",studentsWithGrade) //printing students with grade



//3. reduce() to calculate average marks
//using reduce() to calculate total marks first

const totalMarks = students.reduce((sum,student)=>{
    return sum + student.marks
},0)

const averageMarks = totalMarks / students.length

console.log("Average Marks:\n",averageMarks) //printing average marks



//4. find() the student who scored 92
//using find() to search for student whose marks are 92

const student92 = students.find(student => student.marks == 92)

console.log("Student who scored 92:\n",student92) //printing student details



//5. findIndex() of student "Kiran"
//using findIndex() to find position of student whose name is Kiran

const kiranIndex = students.findIndex(student => student.name == "Kiran")

console.log("Index of Kiran:\n",kiranIndex) //printing index of Kiran