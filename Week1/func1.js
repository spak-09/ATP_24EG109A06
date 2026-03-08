//Write a function that receives 3 number args and  return the big number
//function that receives 3 number args and assigned to a variable
let number=function (a,b,c)
{
    //using if-else-if and && operator 
    if(a>b && a>c)
{
    return a//if the condition is true it returns "A"
} else if(a<b && b>c){
    return b//if the condition is true it returns "b"
}
else{
    return c //returns "c"
}
}
let big=number(10,20,15)//calling the function by passing 3 values and storing the returned biggest value in variable "big"
console.log(big)
