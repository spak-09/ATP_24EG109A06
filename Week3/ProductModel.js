import { Schema,model } from "mongoose";

//Create Product Schema
const productSchema=new Schema({
    productId:{
        type:String,
        required:[true,"Product id is Mandatory"]

    },
    productName:{
        type:String,
        required:[true,"Product Name is Mandatory"]
    },
    price:{ 
        type:Number,
        required:[true,"Product price is Mandatory"],
        min:[10000," min price 10000"],
        max:[50000,"max proce is 50000"]
    },
    brand:{
        type:String,
        required:[true,"Brand is required"]
    }
},{
    versionKey:false,
    timestamps:true
}) 
//Create Product Model
export const ProductModel= model("product",productSchema) 