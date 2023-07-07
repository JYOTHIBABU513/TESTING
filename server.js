const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const db = mongoose.connect('mongodb://localhost:27017').then(
    (err)=> console.log(err)
)


app.listen(3000,(err)=>{
    if(!err){
        console.log('App is listening...')
    } else{
        console.log(err)
    }
})