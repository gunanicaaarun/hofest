var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var session = require("express-session");
var cookieParser = require("cookie-parser");

const app = express()

const customMiddleware = (req, res, next) => {
    console.log("Custom middleware executed");
    next();
};

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(cookieParser());
app.use(session({
  secret: "your-secret-key",
  resave: true,
  saveUninitialized: true
}));
  
app.use(customMiddleware);

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    //var phno = req.body.phno;
    var message = req.body.message;

    var data = {
        "name": name,
        "email" : email,
        //"phno": phno,
        //"password" : password
        "message" : message
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('Contact.html')

})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('Contact.html')
}).listen(3000);

console.log("listening on port 3000")