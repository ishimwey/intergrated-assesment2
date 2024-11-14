const express=require('express');
const app=express();
const port=3000;
app.get(`/`,(req,res)=>{
    res.status(200).json({message:"all post published"});
});
app.post(`/`,(req,res)=>{
    res.status(200).json({message:"Create post"});
   
});

app.listen(port,()=>{
    console.log(`server is running at locahost:${port}`);
});