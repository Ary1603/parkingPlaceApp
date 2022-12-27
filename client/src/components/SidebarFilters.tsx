import React, { useState } from "react";
import "../components/SidebarFilters.css";
//import {handleCheckBoxPublic } from "../components/ParkingCard"

export function SidebarFilters({publicTrue, privateTrue, queryminPrice, querymaxPrice, queryAmenities, filterBtn, resetBtn}:{publicTrue:any, privateTrue:any, queryminPrice:any, querymaxPrice:any, queryAmenities:any, filterBtn:any, resetBtn:any}) {
  // Hooks to validate if the checkbox is Checked
  const [ publicIsChecked, setPublicIsChecked ] = useState(false);
  const [ privateIsChecked, setPrivateIsChecked ] = useState(false);
 
  // Hook to know the Min price and Max price of a parking
  const [ minPrice, setMinPrice ] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  // Function to know if the parking place gonna be public
  const handleCheckBoxPublic= () => { 
    setPublicIsChecked(!publicIsChecked);
    console.log("desde adentro: "+!publicIsChecked)
    {publicIsChecked ? setPublicIsChecked(false) : setPublicIsChecked(true)}
    publicTrue(publicIsChecked)
  } 

  // Function to know if the parking place gonna be private
  const handleCheckBoxPrivate= () => {
    setPrivateIsChecked(!privateIsChecked);
    console.log("desde adentro: "+!privateIsChecked)
    {privateIsChecked ? setPrivateIsChecked(false) : setPrivateIsChecked(true)}
    privateTrue(privateIsChecked)
  }

  //Functions to know parking places with a min a price
  const handleOnChangeMinPrice = (evento:any) => {
    setMinPrice(evento.target.value)
  }
   

  //Functions to know parking places with a max a price
  const handleOnChangeMaxPrice = (evento:any) => {
    setMaxPrice(evento.target.value)
  }

 
  const handleCheckBoxAmentie = (e:any) => {
    queryAmenities(e.target.name, e.target.checked)
    //console.log(e.target.name) 
    //console.log(e.target.checked)
  } 

  // 
  //
   
  const handleSumbit = (e:any) => {
    querymaxPrice(maxPrice)
    queryminPrice(minPrice)
    filterBtn("true")
    console.log(minPrice)
  } 

  const handleReset = () => {
    //publicIsChecked? setPublicIsChecked(false): setPublicIsChecked(true)
    setPublicIsChecked(false)
    resetBtn("true")
  }

  return (
    
    <div className="sidebar-container mt-1 bg-light">
      <p className="filters-h1">Filters</p>
      <div className="hr-filters"></div> 
      <p className="filters-title">Type: </p>
      <div className="input-type">
        <input type="checkbox" name="Public" id="type-public" checked={publicIsChecked} onChange={handleCheckBoxPublic}/> Public
        
        <input type="checkbox" name="Private" id="type-private" checked={privateIsChecked} onChange={handleCheckBoxPrivate}/> Private
      </div>
      <p className="filters-title">Price: </p>
      <p className="price-title"> Per day </p> 
      <div className="input-price-per-hour">
        <input type="text" placeholder="$ Min" value={minPrice} 
        onChange={handleOnChangeMinPrice}/> 
        <div className="price-hr"></div>
        <input type="text" placeholder="$ Max" value={maxPrice} onChange={handleOnChangeMaxPrice}/> 
      </div>
      
      
      <p className="filters-title">Amenities:</p>
      <div className="container-amenities"> 
        <ul className="amenities-list"> 
            <li><input type="checkbox" name="Security cameras" id=""  onChange={handleCheckBoxAmentie}/> Security cameras</li>
            <li><input type="checkbox" name="Closed parking lot" id="" onChange={handleCheckBoxAmentie}/> Closed parking lot</li>
            <li><input type="checkbox" name="Covered parking space" id="" onChange={handleCheckBoxAmentie}/> Covered parking space</li>
            <li><input type="checkbox" name="Charging Area" id="" onChange={handleCheckBoxAmentie}/> Charging Area</li>
            <li><input type="checkbox" name="Automatic payment" id="" onChange={handleCheckBoxAmentie}/> Automatic payment</li>
            <li><input type="checkbox" name="Private policemen" id="" onChange={handleCheckBoxAmentie}/> Private policemen</li>
            <li><input type="checkbox" name="Valet parking" id="" onChange={handleCheckBoxAmentie}/> Valet parking</li>
            <li><input type="checkbox" name="Car wash" id="" onChange={handleCheckBoxAmentie}/> Car wash</li>
            <li><input type="checkbox" name="Good lighting" id="" onChange={handleCheckBoxAmentie}/> Good lighting</li>
        </ul>
          
      </div> 
      <button onClick={handleSumbit} className="btn btn-outline-info apply-filters">Filter</button>
      {/* <button onClick={handleReset} className="btn btn-outline-info reset-filters">Reset</button> */}
    </div> 
     
  );
}
