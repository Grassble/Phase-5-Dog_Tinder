import React from "react";
import FosterCardDog from "./FosterCardDog";

function EmployeeCard ({employee: {name, job, dogs}}) {

    return (
        <div className="fosterCard">
            <h2>{name}</h2>
            <h3>{job}</h3>
            {dogs.map(dog => (<FosterCardDog dog={dog} key={dog.id} />))}
        </div>
    )
}

export default EmployeeCard