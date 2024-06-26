import React, { useState } from 'react'
import './HomePageComponent.css'

const DisplayComponent = ({ item }) => {
  
  const bookingHandler=()=>{
    window.location.href=`/booking?movieName=${item.movieName}`
  }
  return (
    <React.Fragment>
      <img src={item.movieImage} width="200px" height="300px" style={{ verticalAlign: "top" }} />

      <div className="sub-container">
        <i className="bi bi-star-fill text-danger"></i>
        <span style={{ marginLeft: "10px" }}>{item.imdbRating}/10</span>
        <span style={{ marginLeft: "10px" }}>{item.votes} Votes</span>
      </div>

      <p style={{ textAlign: "center", marginBottom: "0" }}>{item.movieName}</p>
      <p style={{ textAlign: "center", marginTop: "8px", paddingTop: "0" }}>{item.movieGenre1}/{item.movieGenre2}</p>
  
      <button type="submit" onClick={bookingHandler}>book now</button>
    </React.Fragment>
  )
}

export default DisplayComponent