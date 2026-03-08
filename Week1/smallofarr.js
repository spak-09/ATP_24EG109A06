//Code to find the smallest Element in an marks array 
let marks=[90,78,65,98]
//first initialize a variable and assign the first element to it by taking an assumption that its the smallest ele
let small=marks[1];
//for loop access each value of the marks array
for(let i=0;i<marks.length;i++)
{
    //if statment to check wheather there is an smaller ele than the assumed ele
    if(marks[i]<small)
    {
        //if condition is true the ele becomes the smallest elemnt 
        small=marks[i]
    }
}
console.log(small)