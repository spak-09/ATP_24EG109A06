import exp from 'express'
import { connect } from 'mongoose'
import { employeeApp } from './API/employeeAPI.js'
import { config } from 'dotenv'
import cors from 'cors'
config()


const app=exp()

const localDevUrl = 'http://localhost:5173'
const allowedOrigins = [
  process.env.FRONTEND_URL,
  localDevUrl
].filter(Boolean)

// add CORS middleware with explicit options
app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true)
        if (allowedOrigins.includes(origin)) return callback(null, true)
        callback(new Error(`CORS policy does not allow access from ${origin}`))
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}))

app.use(exp.json())
app.use("/employee-api",employeeApp)

//connect Database
const connectDB=async()=>{
    try{
        await connect(process.env.DB_URL)
        console.log("connected to Database")
        const port=process.env.PORT || 4000
        app.listen(port,()=>console.log(`server listening in ${port}`))

    }catch(err){
        console.log(err)
    }
}

connectDB()


//to handle invalid path
app.use((req,res,next)=>{
    res.status(404).json({message:`path ${req.url} is invalid`})
})

//Error handling middleware
app.use((err, req, res, next) => {
  console.log("Error name:", err.name);
  console.log("Error code:", err.code);
  console.log("Error cause:", err.cause);
  console.log("Full error:", JSON.stringify(err, null, 2));
  //ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  //CastError
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }

  //send server side error
  res.status(500).json({ message: "error occurred", error: "Server side error" });
});
