/*Exercise 1: Copy & Extend an Array

                        Goal: Learn array copying with spread
                        
                        You are given:
                                let fruits = ["apple", "banana"];
                        
                        
                        Tasks
                              -> Create a new array moreFruits
                              
                              -> Copy all fruits from fruits
                              
                              -> Add "orange" at the end using spread
                              
                              -> Print both arrays
                        
                        
                        ✅ Expected Output
                              ["apple", "banana"]
                              ["apple", "banana", "orange"]
                        
                        👉 Original array should NOT change.
*/
//Given array
 let fruits = ["apple", "banana"];
 //Creation of a new array using spread and adding "orange" to the end
 let moreFruits=[...fruits,"orange"]
 //printing the original array without any changes
 console.log(fruits)
 //The new array with changes
 console.log(moreFruits)
 
/*Exercise 2: Update User Object
                        
                        Goal: Learn object cloning & adding new property
                        
                        You are given:
                                
                                let user = {
                                  name: "Ravi",
                                  city: "Hyderabad"
                                };
                        
                        
                        
                        Tasks
                        
                              -> Create a new object updatedUser
                              
                              -> Copy all properties from user
                              
                              -> Add a new property age: 25
                              
                              -> Print both objects
                        
                        
                        
                        ✅ Expected Output
                              { name: "Ravi", city: "Hyderabad" }
                              { name: "Ravi", city: "Hyderabad", age: 25 }
                        
                        👉 Original object should remain unchanged.*/


//Given object
   let user = {
                   name: "Ravi",
                  city: "Hyderabad"
      };
   //Creating a new object updatedUser and adding new property
   let updatedUser={...user, age: 25}
   //printing the original obj without chnages
   console.log(user)
   //the copyed object with changes
   console.log(updatedUser)

   //write a function that receives any noof args and return their sum
   const findSum=(...number)=>{
    return number.reduce((sum,el)=>sum+el)
   }
   let result=findSum(10,20,30)
   console.log(result)