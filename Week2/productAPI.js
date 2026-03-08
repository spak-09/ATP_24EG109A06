import exp from 'express'
export const productApp=exp.Router()

//local data
let products=[]
//Create prodcut API wiht below operations
  //Create new Product ({productId,name,brand,price})
 productApp.get('/product',(req,res)=>{
    res.json({message:"All Products",payload:products})
  })

 productApp.get('/product/:brand',(req,res)=>{
    //get the brand
    let prodcutBrand=req.params.brand
    //find all the products of the brand
    for(let i=0;i<products.length;i++)
    {
      if(prodcutBrand==products[i].brand)
      {
        res.json({payload:products[i]})
      }
      else
      {
        res.json({message:"NO products found"})
      }
    }
  })

  //post
productApp.post('/product',(req,res)=>{

  //read new user from client 
  const newProduct=req.body
  //
  products.push(newProduct)
  res.json({message:"Product created"})
  
})

//put 
productApp.put('/product',(req,res)=>{

  //get modified Product from client{}
  let modifiedProduct=req.body;
  //get index of existing Product in Products array
  let index=products.findIndex(productobj=>productobj.id==modifiedProduct.id)
  //if Product found
  if(index==-1)
  {
    return res.json({message:"Product not found"})
  }
  //update product with index
  products.splice(index,1,modifiedProduct)
  //send res
  res.json({message:"Product updated"})

})

productApp.delete('/product/:id',(req,res)=>{
  //get the product id from url
  let indexFromUrl=Number(req.params.id)
  //find the object using the id 
  let index=products.findIndex(productobj=>productobj.productId==indexFromUrl)
  //if not found
  if(index==-1)
  {
    return res.json({message:"Product not found"})
  }
  //delete the product
  products.splice(index,1)
  //send res
  res.json({message:"Deletion succesfull"})
})
