import React from "react";
import FosterCardDog from "./FosterCardDog";

function FosterCard ({foster: {name, address, dogs}}) {

    return (
        <div className="fosterCard">
            <h2>{name}</h2>
            <h3>{address}</h3>
            {dogs.map(dog => (<FosterCardDog dog={dog} key={dog.id} />))}
        </div>
    )
}

export default FosterCard