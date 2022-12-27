// Importing module
import express from 'express';
import bodyParser from 'body-parser'
import {deleteParkingplace, dataSet, newParkingPlace, parkingSetFilters, clickedParkingCard} from './controllers/parkingPlace'
import  { parkingDB}   from './database/data'; 
//import * as dataAPI from './routes/data'
const app = express(); 
const PORT:Number=3000;
 
//Upload routes 
var data_route = require('./routes/data')
// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());  

// Routes
// Server 
// Handling GET / Request


//Access to the database also with filters
app.get('/data?', (req, res) => {
    let newParking = parkingSetFilters(req.query)
    res.send(newParking) 
})
  

// Delete a parking  place 
app.delete('/delete-parking-place', (req,res) =>{  
    res.send("Desde el delete") 
    console.log(req.query.name)
    deleteParkingplace(req.query.name)  
})

// Create a new parking place
app.post('/new-parking-place', (req,res) => { 
    res.send("Se agrego un nuevo elemento") 
    console.log(req.body)
    console.log(req.query)
    newParkingPlace(req.query)
})

// Get only 1 parking place for is page
app.get('/parking-place', (req,res) => {
    console.log(req.query)
    let data = clickedParkingCard(req.query)
    res.send(data)
})

// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})

