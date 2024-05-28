const express = require('express');
const app = express();
const router = require('./routes/defaultroutes');

app.use(router);

app.listen(6001, ()=>{
    console.log('server started!');
})