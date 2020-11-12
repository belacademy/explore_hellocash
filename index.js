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
    db=new sqlite3.Database(path.resolve('./db/sample.db'), (err) => {
      if (err) {
        console.error(err.message)
        next(err,null)
      }
      console.log('Connected to the sample database.')
    });
    db.serialize(function() {
      db.run('CREATE TABLE IF NOT EXISTS log(id INTEGER  PRIMARY KEY,  data text, created_at datetime)')
    })
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