import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { Header } from "./components/Header";
import { SidebarFilters } from "./components/SidebarFilters";
import ParkingCards from "./components/ParkingCards";
import ParkingCard from "./components/ParkingCard";
import { CreateParkingCard } from "./components/CreateParkingCard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";



function App() {
  const [isPublic, setIsPublic] = useState(true);
  const [isPrivate, setIsPrivate] = useState(true);



  const [publicQueryParam, setPublicQueryParam] = useState("typePublic=public");
  const [privateQueryparam, setPrivateQueryParam] = useState(
    "&typePrivate=private"
  );

  const [minPriceQueryParam, setMinPriceQueryParam] = useState("");
  const [maxPriceQueryParam, setMaxPriceQueryParam] = useState("");

  const [amenitieQueryParam, setAmenitieQueryParam] = useState<string[]>([
    `&amenitie`,
  ]);

  //Hook query params to create a new parking place
  const [newParkingPlaceQueryParams, setnewParkingPlaceQueryParams] = useState<
    string[]
  >([]);


  //Hook parking place page

  const [parkinCardData, setParkinCardData] = useState({})

  /*Principal hooks cardsss */
  const dataUrl = "/data";
  const urlToFilter = "/data?";
  const [parkingPlace, setParkingPlace] = useState({});

  const fetchParkingPlaces = (url: string) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setParkingPlace(data);
      })
      .catch((error) => console.error("Error en la peticion: " + error));
  };

  useEffect(() => {
    fetchParkingPlaces(dataUrl);
  }, []);

  const publicTrue = (mensaje: any) => {
    setIsPublic(mensaje);
    !isPublic
      ? setPublicQueryParam("typePublic=public")
      : setPublicQueryParam("");


  };

  const privateTrue = (mensaje: any) => {
    setIsPrivate(mensaje);
    !isPrivate
      ? setPrivateQueryParam("&typePrivate=private")
      : setPrivateQueryParam("");

  };

  const minPrice = (price: any) => {
    if (price != "") {
      setMinPriceQueryParam(`&minPrice=${price}`);
    } else {
      setMinPriceQueryParam("");
    }
  };

  const maxPrice = (price: any) => {
    if (price != "") {
      setMaxPriceQueryParam(`&maxPrice=${price}`);
    } else {
      setMaxPriceQueryParam("");
    }
  };

  //Function to know if an amenitie query is already in the array
  function amenitieExists(array: Array<string>, amenitie: string) {
    let exists = array.indexOf(amenitie);
    return exists;
  }

  const amenitiesTurnOn = (amenitieName: any, amenitieTurnOn: any) => {
    //Security camera query param turn on
    if (amenitieName == "Security cameras" && amenitieTurnOn == true) {
      let exists = amenitieExists(amenitieQueryParam, amenitieName);
      if (exists == -1)
        setAmenitieQueryParam([
          ...amenitieQueryParam,
          "&amenitie=" + amenitieName,
        ]);
    }

    //Security camera query param turn off
    if (amenitieName == "Security cameras" && amenitieTurnOn == false) {
      setAmenitieQueryParam((amenitieQueryParam) =>
        amenitieQueryParam.filter((item) => item != "&amenitie=" + amenitieName)
      );
    }

    //Closed parking lot query param turn on
    if (amenitieName == "Closed parking lot" && amenitieTurnOn == true) {
      let exists = amenitieExists(amenitieQueryParam, amenitieName);
      if (exists == -1)
        setAmenitieQueryParam([
          ...amenitieQueryParam,
          "&amenitie=" + amenitieName,
        ]);
    }

    //Closed parking lot query param turn off
    if (amenitieName == "Closed parking lot" && amenitieTurnOn == false) {
      setAmenitieQueryParam((amenitieQueryParam) =>
        amenitieQueryParam.filter((item) => item != "&amenitie=" + amenitieName)
      );
    }

    //Covered parking space query param turn on
    if (amenitieName == "Covered parking space" && amenitieTurnOn == true) {
      let exists = amenitieExists(amenitieQueryParam, amenitieName);
      if (exists == -1)
        setAmenitieQueryParam([
          ...amenitieQueryParam,
          "&amenitie=" + amenitieName,
        ]);
    }

    //Covered parking space query param turn off
    if (amenitieName == "Covered parking space" && amenitieTurnOn == false) {
      setAmenitieQueryParam((amenitieQueryParam) =>
        amenitieQueryParam.filter((item) => item != "&amenitie=" + amenitieName)
      );
    }

    //Charging Area query param turn on
    if (amenitieName == "Charging Area" && amenitieTurnOn == true) {
      let exists = amenitieExists(amenitieQueryParam, amenitieName);
      if (exists == -1)
        setAmenitieQueryParam([
          ...amenitieQueryParam,
          "&amenitie=" + amenitieName,
        ]);
    }

    //Charging Area query param turn off
    if (amenitieName == "Charging Area" && amenitieTurnOn == false) {
      setAmenitieQueryParam((amenitieQueryParam) =>
        amenitieQueryParam.filter((item) => item != "&amenitie=" + amenitieName)
      );
    }

    //Automatic payment query param turn on
    if (amenitieName == "Automatic payment" && amenitieTurnOn == true) {
      let exists = amenitieExists(amenitieQueryParam, amenitieName);
      if (exists == -1)
        setAmenitieQueryParam([
          ...amenitieQueryParam,
          "&amenitie=" + amenitieName,
        ]);
    }

    //Automatic payment query param turn off
    if (amenitieName == "Automatic payment" && amenitieTurnOn == false) {
      setAmenitieQueryParam((amenitieQueryParam) =>
        amenitieQueryParam.filter((item) => item != "&amenitie=" + amenitieName)
      );
    }

    //Private policemen query param turn on
    if (amenitieName == "Private policemen" && amenitieTurnOn == true) {
      let exists = amenitieExists(amenitieQueryParam, amenitieName);
      if (exists == -1)
        setAmenitieQueryParam([
          ...amenitieQueryParam,
          "&amenitie=" + amenitieName,
        ]);
    }

    //Private policemen query param turn off
    if (amenitieName == "Private policemen" && amenitieTurnOn == false) {
      setAmenitieQueryParam((amenitieQueryParam) =>
        amenitieQueryParam.filter((item) => item != "&amenitie=" + amenitieName)
      );
    }

    //Valet parking query param turn on
    if (amenitieName == "Valet parking" && amenitieTurnOn == true) {
      let exists = amenitieExists(amenitieQueryParam, amenitieName);
      if (exists == -1)
        setAmenitieQueryParam([
          ...amenitieQueryParam,
          "&amenitie=" + amenitieName,
        ]);
    }

    //Valet parking query param turn off
    if (amenitieName == "Valet parking" && amenitieTurnOn == false) {
      setAmenitieQueryParam((amenitieQueryParam) =>
        amenitieQueryParam.filter((item) => item != "&amenitie=" + amenitieName)
      );
    }

    //Car wash query param turn on
    if (amenitieName == "Car wash" && amenitieTurnOn == true) {
      let exists = amenitieExists(amenitieQueryParam, amenitieName);
      if (exists == -1)
        setAmenitieQueryParam([
          ...amenitieQueryParam,
          "&amenitie=" + amenitieName,
        ]);
    }

    //Car wash query param turn off
    if (amenitieName == "Car wash" && amenitieTurnOn == false) {
      setAmenitieQueryParam((amenitieQueryParam) =>
        amenitieQueryParam.filter((item) => item != "&amenitie=" + amenitieName)
      );
    }

    //Good lighting query param turn on
    if (amenitieName == "Good lighting" && amenitieTurnOn == true) {
      let exists = amenitieExists(amenitieQueryParam, amenitieName);
      if (exists == -1)
        setAmenitieQueryParam([
          ...amenitieQueryParam,
          "&amenitie=" + amenitieName,
        ]);
    }

    //Good lighting query param turn off
    if (amenitieName == "Good lighting" && amenitieTurnOn == false) {
      setAmenitieQueryParam((amenitieQueryParam) =>
        amenitieQueryParam.filter((item) => item != "&amenitie=" + amenitieName)
      );
    }


  };

  const filterBtn = (filter: any) => {


    fetchParkingPlaces(
      urlToFilter +
        publicQueryParam +
        privateQueryparam +
        minPriceQueryParam +
        maxPriceQueryParam +
        amenitieQueryParam.join("")
    );

  };

  const reserFiltersBtn = (btnReset: any) => {
 
    fetchParkingPlaces(dataUrl);


  };



  // Create new card parking place section
  const newParkingCard = (parkingCardElements: string) => {
    if (parkingCardElements.includes("name=")) {
      setnewParkingPlaceQueryParams([
        ...newParkingPlaceQueryParams,
        parkingCardElements,
      ]);

    }

    if (parkingCardElements.includes("address=")) {
      setnewParkingPlaceQueryParams([
        ...newParkingPlaceQueryParams,
        `&${parkingCardElements}`,
      ]);

    }
  };







  return (
    <>
      <Header />
      <div className="container-fluid" style={{ display: "flex" }}>
        <BrowserRouter>
          {/*// Like This here I am using */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ParkingCards
                    parking={parkingPlace}
                  />
                  <SidebarFilters
                    publicTrue={publicTrue}
                    privateTrue={privateTrue}
                    queryminPrice={minPrice}
                    querymaxPrice={maxPrice}
                    queryAmenities={amenitiesTurnOn}
                    filterBtn={filterBtn}
                    resetBtn={reserFiltersBtn}
                  />
                </>
              }
            />

            <Route
              path="create-new-parking-place"
              element={
                
                <CreateParkingCard
                  newParkingCard={newParkingCard}
                />
              }
            />

            <Route path="parking?" element={<ParkingCard  parkingCard={parkinCardData} parking={parkingPlace}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
{
  /*parking = {parkingPlace} isPublic={isPublic}*/
}
export default App;
{
  /*
   */
}
