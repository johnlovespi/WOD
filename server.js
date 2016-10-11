'use strict'

// This tests to see if we have an environment.
// Only load the dotenv if we need it.
const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';


// regular stuff
const express     = require('express');
const bodyParser  = require('body-parser');
const logger      = require('morgan');

const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;


// set up some logging
app.use( logger( DEV ? 'dev' : 'common') );


app.use(bodyParser.urlencoded({
  extended: false,
}));


// Let's go!
app.listen(PORT , ()=> console.log(`server here! listening on`, PORT ) )

app.get('/showForm', (req,res)=>{
  //console.log(req.query);
  res.json(req.query)
})

app.post('/showForm', (req,res)=>{
  //console.log(req.query);

  res.json({
    message: 'Thank you for submitting! Your form contained the following:',
    get: req.query,
    post: req.body,
  })
})

