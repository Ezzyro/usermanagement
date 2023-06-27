const express = require('express');
const bodyParser=require('body-parser');
const fs=require('fs');
const app=express();
app.use(bodyParser.json());

//api to get list of users
app.get("/api/get",(req,res) =>{
    fs.readFile(__dirname+"/"+"users.json",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
            
            res.json(JSON.parse(data));
        }
    });

});

//api to get user as per url

app.get("/api/get/:userID", (req,res)=>{
    fs.readFile(__dirname+"/"+"users.json",(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            const users=JSON.parse(data);
            const userID=req.params.userID;
            const user=users[userID];
            console.log(user);
            res.json(user);
        }
    });
});


//api to add a new user in json

app.post("/api/get/users",(req,res)=>{
    const data=req.body;
    console.log(JSON.stringify(data));
});

app.listen(3001, ()=> {
    console.log('Server started at 3001')
});




