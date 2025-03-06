const express = require('express');
const app = express();

app.use(express.json());

app.listen(3003,(req,res)=>{
    console.log('Server is running on port 3003');
});

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.post('/',(req,res)=>{
    
    const {username,password} = req.body;
    console.log(username,password);

});