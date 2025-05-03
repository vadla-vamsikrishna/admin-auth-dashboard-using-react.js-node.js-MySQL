const express =require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())
 
//let run the server

app.listen(3002, ()=>{
    console.log('server is running on port 3002')
})

//let connect database
const db =mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'plantdb',
})

//now create a route to the server so that will register a user

app.post('/register',(req,res)=>{
    const sentEmail = req.body.email
    const sentUserName = req.body.username
    const sentPassword = req.body.password

//lets create SQl statement to insert the user to the Database table users
const SQl = 'INSERT INTO users (email,username,password) VALUES (?,?,?)' // we are going to enter these values through variable
const Values = [sentEmail,sentUserName,sentPassword]
 //Query to execute the SQL statement stated above
 db.query(SQl, Values, (err,results)=>{
    if(err){
        res.send(err)
    }
    else{
        console.log('user inserted successfully')
        res.send({message: 'User added!'})

    }
 } )

})

//now we need to login with the credentials from a registered user
// lets create another router 
app.post('/login',(req,res)=>{
    const sentloginUserName = req.body.loginusername
    const sentloginPassword = req.body.loginpassword

//lets create SQl statement to insert the user to the Database table users
const SQl = 'SELECT * FROM users WHERE username=? && password=?'
const Values=[sentloginUserName,sentloginPassword]

db.query(SQl, Values, (err,results)=>{
    if(err){
        res.send({error: err})
    }
    if(results.length>0){
        res.send(results)
    }
    else{
        res.send({message:`Credentials Don'tmatch!`})
    }
 } )
})