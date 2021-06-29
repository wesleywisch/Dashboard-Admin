require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const userRouter = require('./Config/routes/userRouter');
const adminRouter = require('./Config/routes/adminRouter');


mongoose.connect(process.env.MONGO_CONNECT_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    (error) =>{
    if(error){
        console.log(error);
    }else{
        console.log('Mongo conectado!');
    }
});

app.use(express.static(path.join(__dirname, 'Front')));

app.use('/user', express.json(), userRouter);

app.use('/admin', express.json(), adminRouter);

app.listen(3000, () =>{
    console.log('Servidor rodando');
})