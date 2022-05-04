const express=require("express");
const cors=require("cors")
const CategoryRouter=require("./router")

const app=express();

app.use(cors())
app.use("/api",CategoryRouter)
app.listen(process.env.PORT || 4005,()=>{console.log("Started")})

