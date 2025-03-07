const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003,(req,res)=>{
    console.log('Server is running on port 3003');
});

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.post('/registration',(req,res)=>{
    
    const body = req.body;
    console.log(body);

});