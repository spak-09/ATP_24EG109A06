//Code to find the biggest of three numbers
//initializing and assigning values to three variables
let a=10;
let b=20
let c=30
//using if-else-if and && operator 
if(a>b && a>c)//this condition checks if a is greater than  both b and c only then it gives true
{
    console.log(`A is big`)
} else if(a<b && b>c)//this condition checks if b is greater than both a and c then only the statments inside are executed
{
    console.log(`B is big`)
}
else{//if the above two conditions are false it means that c is greater and the statments inside are executed
    console.log(`C is big`)
}