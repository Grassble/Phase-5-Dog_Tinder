import React from "react";

function FosterCardDog ({dog: {name}}) {

    return (
        <div className="fosterCardDog">
            <p>{name}</p>
        </div>
    )
}

export default FosterCardDog