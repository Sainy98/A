import React from "react";

export default function MainCard(props) {

    const { img, name, address, date, price, day } = props;
    return (


        <div className="card">
            <img src={img} alt="img1"></img>
            <span className="heart"><img src="./heart.svg" alt="heart"></img></span>
            <h3>{name}</h3>
            <span>{address}</span> <br></br>
            <span>{date}</span>
            <h3 > {price}<span> {day} </span></h3>
        </div>


    )
}