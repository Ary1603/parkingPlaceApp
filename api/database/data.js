"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parking_Place = exports.parkingDB = void 0;
// Names for the parking place
const namesParking = [
    "Galerias",
    "Antea",
    "Perinorte",
    "Perisur",
    "Dagon",
    "Gandhi",
    "Bash",
    "Tree",
    "Studio F",
    "Logi",
    "Omen",
    "Lambo",
    "Sharpie",
    "Speeds",
    "Brave",
    "Lion",
    "Strake",
    "Beef",
    "Cookie",
    "Car",
];
// Street names
const streetNames = [
    "Tollocan",
    "Bernardo Quitana",
    "Paseo la arboleda",
    "Polanco",
    "Toriles",
    "El campanario",
    "Gustavo Paz",
    "5 de Mayo",
    "2 de Abril",
    "Metepec",
    "Juriquilla",
    "Buenos Aires",
    "La Asuncion",
    "Parque Nacional",
    "Casco",
];
// Amenitis
const amenities = [
    "Security cameras",
    "Closed parking lot",
    "Covered parking space",
    "Charging Area",
    "Automatic payment",
    "Private policemen",
    "Valet parking",
    "Car wash",
    "Good lighting",
];
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
exports.parkingDB = [];
const Parking_Place = class {
    constructor(name, address, score, price, type, images, description) {
        (this.name = name),
            (this.address = address),
            (this.score = score),
            (this.price = price),
            (this.type = type),
            (this.images = images),
            (this.description = description);
    }
};
exports.Parking_Place = Parking_Place;
// Random number function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Create a random name function 
function createRandomName(names) {
    //let leghtName = randomNumber(1, 2);
    let leghtName = 2;
    let randomParkingName = randomNumber(0, names.length);
    let parkingName;
    switch (leghtName) {
        case 1:
            parkingName = (names[randomParkingName] + " Parking").toString();
        case 2:
            let randomParkingName2 = randomNumber(0, names.length);
            parkingName = (names[randomParkingName] +
                " " +
                names[randomParkingName2]).toString();
        default:
            break;
    }
    return parkingName;
}
function createRandomState() {
    const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let random = "";
    for (let i = 0; i < 2; i++) {
        random += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    return random;
}
//Create a random street function
function createRandomStreet(streetNames) {
    let streetNamePicker = randomNumber(0, streetNames.length - 1);
    let randomNumberStreet = randomNumber(1, 3000);
    let randomState = createRandomState();
    return `${streetNames[streetNamePicker]}, No.${randomNumberStreet}, ${randomState}`;
}
// Choose random Amenities
function randomAmentiesPicker(amenities) {
    let amenitiesPicked = [];
    //console.log(amenitiesPicked)
    let amount_of_amenities = randomNumber(2, 5);
    let randomNum = randomNumber(0, amenities.length - 1);
    for (let index = 0; index < amount_of_amenities; index++) {
        let exists = amenitiesPicked.indexOf(amenities[randomNum]);
        if (exists > 0 || exists == 0) {
            randomNum = randomNumber(0, amenities.length - 1);
        }
        else {
            amenitiesPicked.push(amenities[randomNum]);
        }
    }
    return amenitiesPicked;
}
// Create a random parking Place
function createRandomParking() {
    let name = createRandomName(namesParking);
    let address = createRandomStreet(streetNames);
    let price = randomNumber(1000, 10000);
    let score = randomNumber(1, 5);
    let randomPublicorPrivate = randomNumber(1, 2);
    //let howMuchAmenities = randomNumber(1, 5);
    let images = ["https://traficozmg.com/wp-content/uploads/2017/11/slide2.jpg", "https://p4.wallpaperbetter.com/wallpaper/886/354/418/architecture-cesar-bazkez-garages-parking-lot-wallpaper-preview.jpg",
        "https://images.unsplash.com/photo-1545179605-1296651e9d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJncm91bmQlMjBwYXJraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    ];
    let description = randomAmentiesPicker(amenities);
    let type;
    if (randomPublicorPrivate == 1) {
        type = "public";
    }
    else {
        type = "private";
    }
    if (exports.parkingDB.length != 0) {
        exports.parkingDB.map((item, index) => {
            if (name === item)
                createRandomParking();
        });
    }
    exports.parkingDB.push(new exports.Parking_Place(name, address, score, price, type, images, description));
}
//Create data set of 50 parking place's
for (let index = 0; index < 5; index++) {
    //console.log("******************** Nuevo objeto *****************")
    createRandomParking();
}
JSON.stringify(exports.parkingDB);
