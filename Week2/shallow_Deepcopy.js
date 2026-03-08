/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t*/

//Given Data:
const user = { 
     name: "Ravi",
      preferences: {
       theme: "dark",
       language: "en"
      }
  };
//Task1
  //Creating a shallow copy of user
  let userCopy={...user}
//Task2
  //changing name in the copied object
    userCopy.name='Anooj'
  //change preferences.theme in the copied object
    userCopy.preferences.theme='white'
  //.Log both original and copied objects
    console.log( user);
   console.log( userCopy)
    





/*Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged*/
//Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
    //Task1
         //Create a deep copy of order
         let ordercopy=structuredClone(order)
    //Task2
        // Modifying in copied object: customer.address.city
            ordercopy.customer.address.city='khammam'
        //Modifying in copied object: items[0].price
                ordercopy.items[0].price=10000
         //Verify original object remains unchanged
         console.log(order)
         console.log(ordercopy)       