//Install this package before start :  npm i mongoose
const mongoose = require('mongoose');
const express = require('express');
const app = express();

//Normal Testing Example
const main = async () => {
    let dbConnect = mongoose.connect("mongodb+srv://saurbhcoder:NKl6KACRO5L8Cvvg@contact-backend-api.7eqzxhm.mongodb.net/contacts");
    const productSchema = new mongoose.Schema({
        name: String
    });
    const productModel = mongoose.model('products', productSchema);
    let newData = new productModel({
        name: "oppo pro 18",
        price: "1000"
    });
    let result = await newData.save();
    console.log(result);
}
//main();



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



//Insert function
const insertMongoose = async () => {
    mongooseConnect();
    let saveData = new userModel(
        {
            name: "saurbh",
            mobile: 4567,
            price: 4567
        }

    );
    const result = await saveData.save();
    console.log(result);
}
// insertMongoose()


//fecth function
const findMongoose = async () => {
    mongooseConnect();
    const result = await userModel.find();
    console.log(result);
}
// findMongoose();


//update the mongoose
const updateMongoose = async () => {
    mongooseConnect();
    const result = await userModel.updateOne(
        {mobile:"4567"},
        {
            name:'mobile'
        }
    );
    if(result.acknowledged){
        console.log('user updated');
    }
}
// updateMongoose();


//delete the mongoose
const deleteMongoose = async () => {
    mongooseConnect();
    const result = await userModel.deleteMany(
        {mobile:"4567"}
    );
    if(result.acknowledged){
        console.log('user deleted');
    }
}
// deleteMongoose();



/**********************************************************/
/**********************************************************/
//Mongoose API with Node js
/**********************************************************/
/**********************************************************/
app.get('/fetch', async (req, resp)=>{
    mongooseConnect();
    const result = await userModel.find();
    resp.send(result);

});

app.use(express.json());
app.post('/create', async (req, resp)=>{
    mongooseConnect();
    const {name, mobile, price} = req.body;
    let saveData = new userModel(
        {
            name: name,
            mobile: mobile,
            price: price
        }

    );
    const result = await saveData.save();
    console.log(result._id);
});

app.put('/update', async (req, resp)=>{
    mongooseConnect();
    const result = await userModel.updateOne(
        {mobile:"123456"},
        {
            name:'mobile'
        }
    );
    if(result.acknowledged){
        console.log('user updated');
    }
});

app.delete('/delete', async (req, resp)=>{
    mongooseConnect();
    const result = await userModel.deleteMany(
        {mobile:"4567"}
    );
    if(result.acknowledged){
        console.log('user deleted');
    }
});

app.listen('8787');