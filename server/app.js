require("dotenv").config()
const express = require("express");
const app = express();
const connectDB = require('./config/connectDB');
connectDB();
const cors = require("cors")
const userRouter = require('./routes/userRouter')
const port = process.env.PORT


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/user',userRouter)



app.listen(port,()=>{
    console.log("Server is running on Port:",port)
})