"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parkingSetFilters = exports.deleteParkingplace = exports.clickedParkingCard = exports.newParkingPlace = exports.dataSet = void 0;
const data_1 = require("../database/data");
exports.dataSet = data_1.parkingDB;
let dataSetwithFilters = [];
let amenitiesArray = [];
// Create parking place
function newParkingPlace(params) {
    let name = params.name;
    let address = params.address;
    let price = params.price;
    let score = params.score;
    let images = ["https://traficozmg.com/wp-content/uploads/2017/11/slide2.jpg", "https://p4.wallpaperbetter.com/wallpaper/886/354/418/architecture-cesar-bazkez-garages-parking-lot-wallpaper-preview.jpg",
        "https://images.unsplash.com/photo-1545179605-1296651e9d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJncm91bmQlMjBwYXJraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    ];
    let description = params.amenities;
    let type = params.typePP;
    data_1.parkingDB.push(new data_1.Parking_Place(name, address, score, price, type, images, description));
}
exports.newParkingPlace = newParkingPlace;
// Get clicked parking Card
function clickedParkingCard(params) {
    return exports.dataSet[params.id];
}
exports.clickedParkingCard = clickedParkingCard;
//Delete parking Place function
function deleteParkingplace(parkingName) {
    let newParkingDB = exports.dataSet.filter((item) => item.name !== parkingName);
    exports.dataSet = newParkingDB;
}
exports.deleteParkingplace = deleteParkingplace;
// Parking dataSet with filters
function parkingSetFilters(params) {
    let newParkingDB = [];
    dataSetwithFilters = [];
    console.log("Soy paramas desde adentro");
    console.log(params);
    if (Object.getOwnPropertyNames(params).length === 0) {
        dataSetwithFilters = [];
        return exports.dataSet;
    }
    //Only public type
    if (params.typePublic) {
        newParkingDB = exports.dataSet.filter((item) => item.type === params.typePublic);
    }
    //Only private type
    if (params.typePrivate)
        newParkingDB = exports.dataSet.filter((item) => item.type === params.typePrivate);
    //Obtain all public and private type 
    if (params.typePublic && params.typePrivate) {
        newParkingDB = exports.dataSet.filter((item) => item.type === params.typePublic || item.type === params.typePrivate);
    }
    //Update array with the filters of publi or private
    dataSetwithFilters = newParkingDB;
    // Filter by minPrice and maxPrice
    if (params.minPrice && params.maxPrice) {
        if (dataSetwithFilters.length === 0) {
            newParkingDB = exports.dataSet.filter((item) => (item.price >= params.minPrice && item.price <= params.maxPrice));
        }
        else {
            newParkingDB = dataSetwithFilters.filter((item) => item.price > params.minPrice);
        }
    }
    else {
        //Filter by only min price
        if (params.minPrice) {
            if (dataSetwithFilters.length === 0) {
                newParkingDB = exports.dataSet.filter((item) => item.price >= params.minPrice);
            }
            else {
                newParkingDB = dataSetwithFilters.filter((item) => item.price >= params.minPrice);
            }
        }
        //Filter by only max price
        if (params.maxPrice) {
            if (dataSetwithFilters.length === 0) {
                newParkingDB = exports.dataSet.filter((item) => item.price <= params.maxPrice);
            }
            else {
                newParkingDB = dataSetwithFilters.filter((item) => item.price <= params.maxPrice);
            }
        }
    }
    //Update array with price filters
    dataSetwithFilters = newParkingDB;
    //Filters amenities
    if (params.amenitie) {
        let contador = 0;
        let howManyAmenities = params.amenitie.length;
        if (dataSetwithFilters.length === 0) {
            for (let indexHowManyAmenities = 0; indexHowManyAmenities < howManyAmenities; indexHowManyAmenities++) {
                for (let indexDataSet = 0; indexDataSet < exports.dataSet.length; indexDataSet++) {
                    let existe = exports.dataSet[indexDataSet].description.indexOf(params.amenitie[indexHowManyAmenities]);
                    if (existe >= 0) {
                        contador = contador + 1;
                        console.log(exports.dataSet[indexDataSet]);
                        if (exports.dataSet.indexOf(exports.dataSet[indexDataSet]) == -1) {
                            newParkingDB.push(exports.dataSet[indexDataSet]);
                        }
                    }
                }
                console.log(params.amenitie[indexHowManyAmenities]);
            }
        }
        else {
            amenitiesArray = [];
            for (let indexHowManyAmenities = 0; indexHowManyAmenities < howManyAmenities; indexHowManyAmenities++) {
                for (let indexDataSet = 0; indexDataSet < dataSetwithFilters.length; indexDataSet++) {
                    let existe = dataSetwithFilters[indexDataSet].description.indexOf(params.amenitie[indexHowManyAmenities]);
                    console.log("existe? : " + existe);
                    if (existe != -1) {
                        if (amenitiesArray.indexOf(dataSetwithFilters[indexDataSet]) == -1) {
                            console.log("Lo voy a pushear");
                            amenitiesArray.push(dataSetwithFilters[indexDataSet]);
                            newParkingDB = amenitiesArray;
                        }
                    }
                    else {
                        //Stays stored
                        newParkingDB = amenitiesArray;
                    }
                }
            }
        }
    }
    dataSetwithFilters = newParkingDB;
    return dataSetwithFilters;
}
exports.parkingSetFilters = parkingSetFilters;
