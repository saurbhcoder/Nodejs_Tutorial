const express = require('express');
const app = express();
const Route = express.Router();


const helloFilter = (req, res) => {
    console.log('Here is the Response');
}

Route.use(helloFilter)
app.use('/', Route);

Route.get('/a', (req, res)=>{
    console.log('this is function');
})

app.get('/b', (req, res)=>{
    console.log('this is function');
})

Route.get('/c', (req, res)=>{
    console.log('this is function');
})

app.listen(6700);