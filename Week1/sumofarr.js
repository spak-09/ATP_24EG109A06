//Code to find the sum of Elemnts in the given array
let marks=[90,78,65,98]
//initializing a variable and assigning value 0 ot it
let sum=0;
//using for to iterate values to find sum
for(let i=0;i<marks.length;i++)
{
    sum+=marks[i];//sum=sum+marks[i] This statment adds each Element to sum as loop goes on
}
console.log(sum)//prints the final sum