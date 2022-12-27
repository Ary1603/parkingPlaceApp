import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import {
  BsCameraVideoFill,
  BsUmbrella,
  BsFillLightningChargeFill,
  BsLightbulbFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { FaDoorClosed, FaParking } from "react-icons/fa";
import { GrUserPolice } from "react-icons/gr";
import { MdLocalCarWash } from "react-icons/md";
import { SiContactlesspayment } from "react-icons/si";

import './ParkingCard.css'

function ParkingCard({
  parkingCard,
  parking,
}: {
  parkingCard: any;
  parking: any;
}) {

  //Hooks
  const [parkingCardData, setParkingCardData] = useState({
    name: "",
    address: "",
    score: "",
    price: "",
    description: [""],
    images: []
  });
  
  var URLsearch = window.location.search;
  console.log("Sou urleSearch: ");
  console.log(URLsearch);
  console.log(parkingCard);
  let id = URLsearch.replace("?id=", "");
  console.log("soy id: " + id);
  let n = parseInt(id);
  console.log(n);
  //var  empty = true;
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    fetch(`/parking-place?id=${n}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("entre");
        console.log(data);
        setParkingCardData(data);
        setEmpty(false);
        //location.href =`/parking?id=${index}`;
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleOnClickDeleteParkingPlace =  (e:any) => {
    fetch(`/delete-parking-place?name=${parkingCardData.name}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      }
    })
    
    .then(data => {
      setEmpty(true)
      console.log(data)}) // Manipulate the data retrieved back, if we want to do something with it
    .catch(err => console.log(err)) // Do something with the error

  }


  return (
    <>
      {empty ? (
        <h1 className="nothing-here">Nothing here.</h1> 
      ) : (
        <>
          <div className="card-container principal-container-individual-card">
            <div className="name-images-container">
              <h1 className="parking-name">{parkingCardData.name}</h1>
              {/*Carrousel Bootstrap*/}
              <div id="carouselExampleIndicators" className="carousel slide images-carrousel">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={parkingCardData.images[0]}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={parkingCardData.images[1]}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={parkingCardData.images[2]}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            {/*Description Container: Street Name, Score, Price, Amenities, Reservtion form */}
            <div className="description-container-indiviual">
              <button className="btn btn-outline-danger btn-delete-parking-place" onClick={handleOnClickDeleteParkingPlace}>Delete</button>
            <div className="score-price-container-individualCard">
                <span className="price-score-individual-card">Price: $ {parkingCardData.price} / Mon</span>
                <span className="price-score-individual-card">Score: {parkingCardData.score}</span>
              </div>
              <h2 className="street-name-parking-place">{parkingCardData.address}</h2>
              <p className="amenities-individual-card-title">Ameninities: </p>
              <div className="amenities-container-individual-card">
                      {parkingCardData.description.map(
                        (amenitie: string, index: number) => (
                          <>
                          <span className="amenities-card" key={index}>
                            {(() => {
                              switch (amenitie) {
                                case "Security cameras":
                                  return (
                                    
                                    <BsCameraVideoFill className="amenitie-icon" />
                                  );

                                case "Closed parking lot":
                                  return (
                                    <FaDoorClosed className="amenitie-icon" />
                                  );
                                case "Covered parking space":
                                  return (
                                    <BsUmbrella className="amenitie-icon" />
                                  );
                                case "Charging Area":
                                  return (
                                    <BsFillLightningChargeFill className="amenitie-icon" />
                                  );
                                case "Automatic payment":
                                  return (
                                    <SiContactlesspayment className="amenitie-icon" />
                                  );
                                case "Private policemen":
                                  return (
                                    <GrUserPolice className="amenitie-icon" />
                                  );
                                case "Valet parking":
                                  return (
                                    <FaParking className="amenitie-icon" />
                                  );
                                case "Car wash":
                                  return (
                                    <MdLocalCarWash className="amenitie-icon" />
                                  );
                                case "Good lighting":
                                  return (
                                    <BsLightbulbFill className="amenitie-icon" />
                                  );

                                default:
                                  return (
                                    <></>
                                  ); /*<BsFillPlusCircleFill className="amenitie-icon" />;*/
                              }
                            })()}

                            {amenitie}
                          </span>
                          </>)
                          
                      )}
                      <div className="reservation-form-container">
                            <form action="" className="reservation-form">
                              <p className="form-input-title">Name: </p>
                              <input className="name-email-totalCars-form-input" type="text" placeholder="Client Name"/>
                              <p className="form-input-title">E-mail: </p>
                              <input className="name-email-totalCars-form-input" type="email" name="" id="" placeholder="Client E-mail"/>
                              <p className="form-input-title">Total of cars: </p>
                              <input className="name-email-totalCars-form-input" type="text" placeholder="Total of cars"/>
                              <div className="reservation-date-container">
                                <span>From: </span>
                                <input className="date-input-form" type="datetime" name="" id="" />
                                <span> to </span>
                                <input className="date-input-form" type="datetime" name="" id="" />
                              </div>
                            </form>
                          </div>
                          <button className="btn btn-outline-primary btn-create-reservation">Create Reservation</button>
                    </div>
            </div>
              
              
          </div>
          
        </>
      )}
    </>
  );
}

export default ParkingCard;
