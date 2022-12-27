import React, { useState } from "react";
import "./CreateParkingCard.css";
//import App from './App'

export function CreateParkingCard({ newParkingCard }: { newParkingCard: any }) {
  var urlencoded = new URLSearchParams();
  urlencoded.append("name", "hola");
  //Form hooks
  const [queryParams, setQueryParams] = useState({
    name: "",
    address: "",
    price: 0,
    score: 0,
    typePP: "",
    description: [""],
  });
  const [publicIsChecked, setPublicIsChecked] = useState(false);
  const [privateIsChecked, setPrivateIsChecked] = useState(false);
  const [parkingName, setParkingName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [score, setScore] = useState(0);
  const [type, setType] = useState("");
  const [amenities, setAmenities] = useState<string[]>(["&amenities=New"]);

  //const [parkingName, setParkingName] = useState("")
  const handleOnBlurParkingName = (e: any) => {
    setParkingName(e.target.value);
    newParkingCard(`name=${e.target.value}`);
  };

  const handleOnBlurParkingAddress = (e: any) => {
    setAddress(e.target.value);
    newParkingCard(`address=${e.target.value}`);
  };

  const handleOnBlurScore = (e: any) => {
    setScore(e.target.value);
  };

  const handleOnBlurPrice = (e: any) => {
    setPrice(e.target.value);
  };

  const typeCheckBoxIsChecked = (e: any) => {
    setPublicIsChecked(!publicIsChecked);

    if (publicIsChecked) {
      setPrivateIsChecked(true);
    }
    {
      publicIsChecked ? setPublicIsChecked(false) : setPublicIsChecked(true);
    }
    {
      publicIsChecked ? setType("private") : setType("public");
    }
  };

  const handleCheckBoxPrivate = () => {
    setPrivateIsChecked(!privateIsChecked);

    if (privateIsChecked) {
      setPublicIsChecked(true);
    }

    {
      privateIsChecked ? setPrivateIsChecked(false) : setPrivateIsChecked(true);
    }
    {
      privateIsChecked ? setType("public") : setType("private");
    }
  };

  const sumbitNewParkingPlaceForm = () => {
    fetch(
      `/new-parking-place?name=${parkingName}&address=${address}&price=${price}&score=${score}&typePP=${type}${amenities.join(
        ""
      )}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    alert("It has been created a new parking card go home to see it!!!");
  };

  const handleCheckBoxAmenitie = (e: any) => {
    if (
      e.target.checked &&
      amenities.indexOf(`&amenities=${e.target.name}`) == -1
    ) {
      setAmenities([...amenities, `&amenities=${e.target.name}`]);
    }

    if (
      e.target.checked == false &&
      amenities.indexOf(`&amenities=${e.target.name}`) != -1
    ) {
      setAmenities(
        amenities.filter((item) => item != `&amenities=${e.target.name}`)
      );
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid general-create-container">
      <div className="title-container">
        <p className="create-parking-place-title">Create a new</p>
        <p className="create-parking-place-title">parking place !!!</p>
      </div>
      <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
          <p className="title-text-input">Parking name: </p>
          <input
            className="text-input"
            type="text"
            placeholder="Parking name"
            onBlur={handleOnBlurParkingName}
          />
          <p className="title-text-input">Address: </p>
          <input
            className="text-input"
            type="text"
            placeholder="Address"
            onBlur={handleOnBlurParkingAddress}
          />

          <div className="score-price-container">
            <p className="title-text-input" id="score-title">
              Score:
            </p>
            <input
              className="text-input"
              id="score-input"
              type="text"
              placeholder="Parking score"
              onChange={handleOnBlurScore}
            />
            <p className="title-text-input" id="price-title">
              Price:
            </p>
            <input
              className="text-input"
              type="text"
              placeholder="Price"
              id="price-input"
              onChange={handleOnBlurPrice}
            />
          </div>

          <div className="checkboxType-container">
            <p className="title-text-input" id="title-type">
              Type:
            </p>
            <input
              type="checkbox"
              name=""
              id=""
              checked={publicIsChecked}
              onChange={typeCheckBoxIsChecked}
            />
            <span className="title-type-checkbox">Public</span>
            <input
              type="checkbox"
              name=""
              id=""
              checked={privateIsChecked}
              onChange={handleCheckBoxPrivate}
            />
            <span className="title-type-checkbox">Private</span>
          </div>
          <p className="title-text-input">Amenities: </p>
          <div className="amenities-images-container">
            <ul className="amenities-list-create">
              <li>
                <input
                  type="checkbox"
                  name="Security cameras"
                  id=""
                  onChange={handleCheckBoxAmenitie}
                />{" "}
                Security cameras
              </li>
              <li>
                <input
                  type="checkbox"
                  name="Closed parking lot"
                  id=""
                  onChange={handleCheckBoxAmenitie}
                />{" "}
                Closed parking lot
              </li>
              <li>
                <input
                  type="checkbox"
                  name="Covered parking space"
                  id=""
                  onChange={handleCheckBoxAmenitie}
                />{" "}
                Covered parking space
              </li>
              <li>
                <input
                  type="checkbox"
                  name="Charging Area"
                  id=""
                  onChange={handleCheckBoxAmenitie}
                />{" "}
                Charging Area
              </li>
              <li>
                <input
                  type="checkbox"
                  name="Automatic payment"
                  id=""
                  onChange={handleCheckBoxAmenitie}
                />{" "}
                Automatic payment
              </li>
              <li>
                <input
                  type="checkbox"
                  name="Private policemen"
                  id=""
                  onChange={handleCheckBoxAmenitie}
                />{" "}
                Private policemen
              </li>
              <li>
                <input
                  type="checkbox"
                  name="Valet parking"
                  id=""
                  onChange={handleCheckBoxAmenitie}
                />{" "}
                Valet parking
              </li>
              <li>
                <input
                  type="checkbox"
                  name="Car wash"
                  id=""
                  onChange={handleCheckBoxAmenitie}
                />{" "}
                Car wash
              </li>
              <li>
                <input
                  type="checkbox"
                  name="Good lighting"
                  id=""
                  onChange={handleCheckBoxAmenitie}
                />{" "}
                Good lighting
              </li>
            </ul>

            <div className="uploaded-images-container">
              <div className="images">
                <p>Images:</p>
              </div>
              <button className="btn btn-outline-secondary btn-upload-images">
                Upload images
              </button>
            </div>
          </div>
          <button
            className="btn btn-outline-success btn-create-parking-place"
            onClick={sumbitNewParkingPlaceForm}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
