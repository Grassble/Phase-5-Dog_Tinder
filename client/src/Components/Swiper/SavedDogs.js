import React, { useEffect, useState } from "react";
import SavedDogCard from "./SavedDogCard";
import EmployeeCardMiddle from "./EmployeeCardMiddle";

function SavedDogs({employees, shelters}) {

    let [savedDogs, setSavedDogs] = useState([])

    

    useEffect(() => {
        fetch("http://localhost:4000/saves")
        .then(response => response.json())
        .then(data => setSavedDogs(data))
      }, [])

    return (
        <div>
            <h1 className="pageTitle">Saved Dogs</h1>
            <div>
                {savedDogs.map(savedDog => (<SavedDogCard savedDog={savedDog} shelters={shelters} key={savedDog.id} />))}
                {employees.map(employee => (<EmployeeCardMiddle employee={employee} key={employee.id} />))}
            </div>
        </div>
    )
}

export default SavedDogs