//Write a function that receives an array as arg and return their sum
//function that receives an array and assigned to a variable
let asum= function (marks)
{
    //initializing sum variable to store total value and assign it to 0
    let sum=0;
    //using for loop to iterate through each element of the array
for(let i=0;i<marks.length;i++)
{
    sum+=marks[i];//adding each array element to sum
} 
return sum//returns the final sum after loop completes
}
let result=asum([10,20,30,40])//calling the function by passing an array and storing returned value in variable "result"
console.log(result)