//Install this package before start :  npm i mongoose
const mongoose = require('mongoose');
const express = require('express');
const app = express();


//CURD OPERATION IN MONGODB + NODEJS + API + MONGOOSE
const mongooseConnect = () => {
    const uri = "mongodb+srv://saurbhcoder:NKl6KACRO5L8Cvvg@contact-backend-api.7eqzxhm.mongodb.net/contacts";
    mongoose.connect(uri)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.error('Error connecting to MongoDB:', err);
        });
}

// mongooseConnect()

const userSchema = new mongoose.Schema(
    {
        name: String,
        mobile: Number,
        price: Number
    },

);
const userModel = mongoose.model('User', userSchema);


app.get('/search/:key', async (req, res)=>{
    mongooseConnect();
    let keyValue = req.params.key;
    let result = await userModel.find(
        {
            "$or" : [
                { name : {$regex:keyValue}},
                { mobile : {$regex:keyValue}},
                { price : {$regex:keyValue} },
            ]
        }
    );
    if(result.length === 0){
        console.log('No Result found');
    }
    res.send(result);
});

app.listen('4545');