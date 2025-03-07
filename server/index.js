const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const userModel = require('./models/User');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, async (req,res)=>{

    try {
        await mongoose.connect('mongodb+srv://pasindujayasundara28:4OoSVOxppCZZog7X@cluster0.k1qyn.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Server is running on port 3003');
    } catch (error) {
        console.log(error);
    }
    
});

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.post('/registration',async (req,res)=>{
    
    const {username,password} = req.body;

    // save
    const createdUser = await userModel.create(
        {
            username,
            password
        }
    );

    res.send(createdUser);

});