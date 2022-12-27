import React, { useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import "../components/ParkingCards.css";
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


type parkingDataType = boolean | any | string;

function ParkingCards({
  parking,

}: 
{
  parking: parkingDataType;

}) {

  const [urlParkingCard, setUrlParkingCard] = useState("");

  const handleOnClickKey = (index: any) => (e: any) => {
    setUrlParkingCard(`/parking?id=${index}`);
  };

  return (
    <>
      <div className="cards-container row ml-5">
        <>
          {Object.getOwnPropertyNames(parking).length > 0 ? (
            <>
              {parking.map((item: any, index: number) => (
                <>
                  <a href={urlParkingCard} className="a-cards">
                    <div
                      key={index}
                      className="card-component card "
                      onClick={handleOnClickKey(index)}
                    >
                      <div id="1" className="carousel slide  parking-imgs">
                        <div className="carousel-indicators ">
                          <button
                            type="button"
                            data-bs-target={`#${index}`}
                            // data-bs-target="#carouselExampleIndicators "
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            // data-bs-target="#carouselExampleIndicators"
                            data-bs-target={`#${index}`}
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            // data-bs-target="#carouselExampleIndicators"
                            data-bs-target={`#${index}`}
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                        </div>
                        <div className="carousel-inner ">
                          <></>
                          <div className="carousel-item active img">
                            <img
                              src={item.images[0]}
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item img">
                            <img
                              src={item.images[1]}
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item img">
                            <img
                              src={item.images[2]}
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
                      <div className="description-container">
                        <div className="card-hedear">
                          <p className="card-street-name">{item.address}</p>
                          <span className="parking-score">
                            <AiFillStar className="star" />
                            {item.score}
                          </span>
                        </div>

                        <div className="division-hr"></div>
                        <div className="amenities-container">
                          {item.description.map(
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
                              </>
                            )
                          )}
                        </div>
                        <p className="price-per-hour">$ {item.price} p/h</p>
                      </div>
                    </div>
                  </a>
                </>
              ))}
            </>
          ) : (
            <>
              <h1>Esta cargando</h1>
            </>
          )}
        </>
      </div>
    </>
  );
}

export default ParkingCards;
