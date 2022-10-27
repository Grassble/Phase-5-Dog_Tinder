import React from "react";

function DogCard({dog: {name, image}}) {

    return(
        <div className="dogCard">
            <h1>{name}</h1>
            <img className="dogImage" src={image} alt="Dog Image"/>
        </div>
    )
}

export default DogCard