//Atlaas password : EERR@#!#423


//Install this package : npm i mongodb
const { MongoClient } = require('mongodb');
const url = "mongodb+srv://saurbhcoder:NKl6KACRO5L8Cvvg@contact-backend-api.7eqzxhm.mongodb.net/";
const client = new MongoClient(url);
const dataBaseName = "contact-backend-api";
const collectionName = "contacts";

//From these connection and collection is connected
async function mongoDbConnection()
{
    let connect = await client.connect();
    db = connect.db(dataBaseName);
    collection = db.collection(collectionName);
    return collection;
}


//From these you perform Database operation example <<fetching the data>>
const getData = async () => {
    let dbConnect = await mongoDbConnection();
    data = await dbConnect.find().toArray();
    console.log(data);
}
// getData();



//Insert the document into collection
const insertData = async() => {
    let dbConnect = await mongoDbConnection();
    dataNew = await dbConnect.insertOne({name : "saurbh"});
    if(dataNew.acknowledged){
        console.log('Data is Inserted');
    }
}
// insertData(); 

//Insert Many Document into collection
const insertDataMany = async() => {
    let dbConnect = await mongoDbConnection();
    dataNew = await dbConnect.insertMany([{name : "saurbh1"},{name : "saurbh2"},{name : "saurbh3"}]);
    if(dataNew.acknowledged){
        console.log('Data is Many Inserted');
    }
}
// insertDataMany(); 


//update the mongodb Data
const updateData = async() => {
    let dbConnect = await mongoDbConnection();
    dataNew = await dbConnect.updateOne( { email: "a2@gmail.com" }, { $set: { name: 'pojofdfdfsdf' } } );
    if(dataNew.acknowledged){
        console.log('Data is Updated');
    }
}
//updateData();


//DELETE the Data
const deleteData = async() => {
    let dbConnect = await mongoDbConnection();
    dataNew = await dbConnect.deleteMany( { name: "saurbh" } );
    if(dataNew.acknowledged){
        console.log('Data is Deleted');
    }
}
deleteData();
getData();