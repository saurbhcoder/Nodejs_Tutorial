const express = require('express');

const app = express();

const EventEmitter = require("events");
// const { EventEmitter } = require('stream');

const events = new EventEmitter;

events.on("eventGenerateHere", ()=>{
    console.log('eventGenerateHere');
})

app.get('/', (req, res)=>{
    console.log('api called');
    events.emit("eventGenerateHere");
})

app.listen(9090);

//its just like the button click function in html or javascript