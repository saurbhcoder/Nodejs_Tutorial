//install this package
// npm i mysql
const mysql = require('mysql');
const express = require('express');
const app = express();


//connection
const con = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "",
        database : "xxx"
    }
);
con.connect((err)=>{
    if(err) console.log(err);
    console.log('connection done');
});


//Get API using mysql
app.get('/', (req, res)=>{
    let query = "select * from class";
    con.query(query, (err, result)=>{
        if(err) console.log('something is wrong');
        res.send(result)
    });
});


//post or insert API using mysql
app.use(express.json());
app.post('/', (req, res)=>{
    let query = "INSERT INTO class (name) VALUES ('Cardinal')";
    con.query(query, (err, result)=>{
        if(err) console.log('something is wrong');
        res.send(result)
    });
    console.log('api');
});



//put or update API using mysql
app.put('/', (req, res)=>{
    let query = "UPDATE class SET name = 'Alfred Schmidt' WHERE id = 15";
    con.query(query, (err, result)=>{
        if(err) console.log('something is wrong');
        res.send(result)
    });
    console.log('api');
});


//delete API using mysql
app.delete('/', (req, res)=>{
    let query = "delete from class where id='15'";
    con.query(query, (err, result)=>{
        if(err) console.log('something is wrong');
        res.send(result)
    });
    console.log('api');
});




app.listen('6767');