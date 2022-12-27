"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing module
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const parkingPlace_1 = require("./controllers/parkingPlace");
//import * as dataAPI from './routes/data'
const app = (0, express_1.default)();
const PORT = 3000;
//Upload routes 
var data_route = require('./routes/data');
// Middlewares
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Routes
// Server 
// Handling GET / Request
//Access to the database also with filters
app.get('/data?', (req, res) => {
    let newParking = (0, parkingPlace_1.parkingSetFilters)(req.query);
    res.send(newParking);
});
// Delete a parking  place 
app.delete('/delete-parking-place', (req, res) => {
    res.send("Desde el delete");
    console.log(req.query.name);
    (0, parkingPlace_1.deleteParkingplace)(req.query.name);
});
// Create a new parking place
app.post('/new-parking-place', (req, res) => {
    res.send("Se agrego un nuevo elemento");
    console.log(req.body);
    console.log(req.query);
    (0, parkingPlace_1.newParkingPlace)(req.query);
});
// Get only 1 parking place for is page
app.get('/parking-place', (req, res) => {
    console.log(req.query);
    let data = (0, parkingPlace_1.clickedParkingCard)(req.query);
    res.send(data);
});
// Server setup
app.listen(PORT, () => {
    console.log('The application is listening '
        + 'on port http://localhost:' + PORT);
});
