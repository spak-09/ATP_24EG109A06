// Test Data
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];


//1. Use filter() to get only inStock products
//using filter() to return only products whose inStock value is true

const inStockProducts = cart.filter(product => product.inStock == true)

console.log("After filtering only inStock products:\n",inStockProducts) //printing array after filtering



//2. Use map() to create a new array with { name, totalPrice }
//using map() to create a new array with product name and totalPrice

const productTotalPrice = cart.map(product => ({
    name: product.name,
    totalPrice: product.price * product.quantity   //calculating total price
}))

console.log("After creating array with name and totalPrice:\n",productTotalPrice) //printing new array



//3. Use reduce() to calculate grand total cart value
//using reduce() to add total price of all products

const grandTotal = cart.reduce((sum,product)=>{
    return sum + (product.price * product.quantity)
},0)

console.log("Grand Total Cart Value:\n",grandTotal) //printing total cart value



//4. Use find() to get details of "Mouse"
//using find() to search for product with name "Mouse"

const mouseProduct = cart.find(product => product.name == "Mouse")

console.log("Details of Mouse:\n",mouseProduct) //printing Mouse product details



//5. Use findIndex() to find the position of "Keyboard"
//using findIndex() to get index of product whose name is "Keyboard"

const keyboardIndex = cart.findIndex(product => product.name == "Keyboard")

console.log("Index of Keyboard:\n",keyboardIndex) //printing index of Keyboard