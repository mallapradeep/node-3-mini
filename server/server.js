require ('dotenv').config();

const express = require(express);
const bodyParser = require(body-parser);
const messagesCtrl = require('./messagesCtrl');
const session = require('express-session');


const app=express();
app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))



let {SERVER_PORT}= process.env;

//endpoints
app.get(`/api/messages`, messagesCtrl.getAllMessages );
app.post(`/api/messages`, messagesCtrl.createMessage );


app.listen(SERVER_PORT,()=>{
    console.log(`Listening to PORT:${SERVER_PORT}`)
})

