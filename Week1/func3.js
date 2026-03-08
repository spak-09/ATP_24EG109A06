//function that receives array and search element and assigned to a variable
let search= function (array,sele)
{
  let found=0; //variable to check whether element is found or not  
for(let i=0;i<array.length;i++)
{
     //using for loop to iterate through the array
    if(sele==array[i])
    {
              //checking if search element matches array element
        
              return i+1  //returning the index of found element
        found=1 //if found sets it to 1
    }
}
        //if element is not found after loop completes
    if (found==0)
    {
        return 'not found'  //returns "not found" if element does not exist
    } 
}
let result=search([10,20,30,40],50)  //calling the function by passing array and search value
console.log(result)