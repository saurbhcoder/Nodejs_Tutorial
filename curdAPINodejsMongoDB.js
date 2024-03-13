//Install this package : npm i mongodb
const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const url = "mongodb+srv://saurbhcoder:NKl6KACRO5L8Cvvg@contact-backend-api.7eqzxhm.mongodb.net/";
const client = new MongoClient(url);
const dataBaseName = "contact-backend-api";
const collectionName = "contacts";

//From these connection and collection is connected
async function mongoDbConnection() {
    let connect = await client.connect();
    db = connect.db(dataBaseName);
    collection = db.collection(collectionName);
    return collection;
}

//Get the all Data in once
//http://localhost:4500/
app.get('/', async (req, resp) => {
    let dbConnect = await mongoDbConnection();
    let getData = await dbConnect.find({}).toArray();
    resp.send(getData);
});

//Get the Data using params
//http://localhost:4500/hello
app.get('/:name', async (req, resp) => {
    let getName = req.params.name;
    console.log(getName);
    let dbConnect = await mongoDbConnection();
    let getData = await dbConnect.find({ name: getName }).toArray();
    resp.send(getData);
});


//api using the post request
//http://localhost:4500
// json request
// {
//     "name": "xxx",
//         "phone": "234567890",
//             "class": "first",
//                 "computer": "google"
// }
app.use(express.json());
app.post("/", async (req, resp) => {
    const {name, phone, classv, computer} = req.body;
    let dbConnect = await mongoDbConnection();
    dataNew = await dbConnect.insertOne({name : name, phone:phone, classv:classv, computer:computer});
    if(dataNew.acknowledged){
        console.log('Data is Inserted');
    }
});


app.put("/", async (req, resp) => {
    const {name, phone, classv, computer} = req.body;
    let dbConnect = await mongoDbConnection();
    dataNew = await dbConnect.insertMany([{name : "xxx"},{phone : "2323232323"},{classv : "2323232323"}]);
    if(dataNew.acknowledged){
        console.log('Data is updated');
    }
});


app.delete("/:id", async (req, resp) => {
    let name = req.params.id;
    let dbConnect = await mongoDbConnection();
    dataNew = await dbConnect.deleteMany( { name: name } );
    if(dataNew.acknowledged){
        console.log('Data is Deleted');
    }
});


app.listen(4500);