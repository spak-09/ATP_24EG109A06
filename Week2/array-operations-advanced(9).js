// Test Data
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];



//1. filter() all credit transactions
//using filter() to return transactions whose type is credit

const creditTransactions = transactions.filter(t => t.type == "credit")

console.log("Credit Transactions:\n",creditTransactions) //printing credit transactions



//2. map() to extract only transaction amounts
//using map() to create new array with only amount values

const transactionAmounts = transactions.map(t => t.amount)

console.log("Transaction Amounts:\n",transactionAmounts) //printing amounts



//3. reduce() to calculate final account balance
//using reduce() to add credit and subtract debit amounts

const finalBalance = transactions.reduce((balance,t)=>{

    if(t.type == "credit")
        return balance + t.amount
    else
        return balance - t.amount

},0)

console.log("Final Account Balance:\n",finalBalance) //printing final balance



//4. find() the first debit transaction
//using find() to search first transaction whose type is debit

const firstDebit = transactions.find(t => t.type == "debit")

console.log("First Debit Transaction:\n",firstDebit) //printing transaction details



//5. findIndex() of transaction with amount 10000
//using findIndex() to get index of transaction whose amount is 10000

const index10000 = transactions.findIndex(t => t.amount == 10000)

console.log("Index of transaction with amount 10000:\n",index10000) //printing index