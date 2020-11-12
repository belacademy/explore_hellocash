const path = require('path')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const logger = require('morgan')
const config = require('./config/hellocash_config')
const sqlite3 = require('sqlite3').verbose()

const PORT = process.env.PORT || 5000
let db=null
const app = express()
app.use(function(req,res,next){
  if(db===null) {
    db=new sqlite3.Database(path.resolve('./db/sample.db'),sqlite3.OPEN_CREATE, (err) => {
      if (err) {
        console.error(err.message)
      }
      console.log('Connected to the sample database.')
    });
  }
  next()
})
app.get('/',function(req,res){
  console.log(db)
  res.status(200).json(db)
})
app.listen(PORT,()=>[
  console.log(`Server listening to ${PORT}...`)
])