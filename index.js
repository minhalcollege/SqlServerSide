//very simillar to import in java
//in js we get an object / (objects) to work with 

var express = require('express')
//var bodyParser = import body-parser
var bodyParser = require('body-parser')


//like new express() in JAVA
var app = express()

// parse application/json
app.use(bodyParser.json())



 
//types in js:
 //Boolean, Number /*3*/, String, Function, Object
//var x = function(){console.log('Hello')}//String
//in java script functions are first class citizens

// function callback(req, res){
//     res.send("Home Page!")
// }

//localhost:3000/about


 
var expenses = [
    {
        title:'Burger', 
        category:'Food',
        amount: 50,
        date: '2018/02/04'
    },
    {
        title:'Train Ticket', 
        category:'Transportaion',
        amount: 30,
        date: '2018/02/04'
    },
    {
        title:'Forgot the credit card', 
        category:'OMG!',
        amount: 1500,
        date: '2018/02/04'
    }
];

app.get('/expenses', function(req, res){
    res.json(expenses)
});

// add dependency: parse json from the body:
app.post('/expenses', function(req, res){

    var expense = req.body //body-parser

    expenses.push(expense)
 
    res.send('response to POST Request...')
});


//localhost:3000
app.get('/', function(req, res){
    res.send("Index Page")
});
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

//start the server on port 3000
app.listen(3000)