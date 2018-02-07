var express = require('express')
var bodyParser = require('body-parser')
var app = express()

//body-parser (used for POST Reueqsts) parse application/json
app.use(bodyParser.json())

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

app.get('/expenses', (req, res)=>{
    res.json(expenses);
})


app.post('/expenses', (req, res)=>{
    var expense = req.body
    //validate before inserting to the database...
    //TODO: validate.

    //if there is an expense:
    if(expense && expense.title && expense.category && expense.amount){
        expenses.push(expense)
        res.json({'success': true})
    }else{
        res.json({'success': false})
    }
})

//get Expense By ID
app.get('/expenses/:id', (req, res)=>{
    var id = req.params.id
    var expense = expenses[id]
    if(expense){
        res.json(expense)
    }else{
        res.json({success: 'false'})
    }
})

//get Expense By ID
app.delete('/expenses/:id', (req, res)=>{
    
        //fruits.splice(2, 1);
        var id = req.params.id
        var deleted = expenses.splice(id, 1)
    
        if(deleted.length > 0){
            //deleted['success'] = true
            res.json(deleted)
        }else{
            res.json({success: 'false'})
        }
    }
)

//update by id:
app.put('/expenses/:id', (req, res)=>{
    const id = req.params.id //index in the array

    var expense = req.body //what to put instead at the index.
    if(expenses[id]){
     expenses[id] = expense
    res.json(expense)
    }else{
        res.json({'success':false, 'message': 'No Such id'})
    }
})
    

//start the server on port 3000
app.listen(3000)