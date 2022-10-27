import React, { useState } from "react"
import EmployeeCardMiddle from "./EmployeeCardMiddle"

function SavedDogCard ({shelters, savedDog: {id, name, image, shelter_id, breed_id, employee_id, foster_id, employee, foster}}) {

    const [newDogName, setNewDogName] = useState(name)
    const [newDogImage, setNewDogImage] = useState(image)
    const [newShelterID, setNewShelterID] = useState(shelter_id)
    const [newBreedID, setNewBreedID] = useState(breed_id)
    const [newEmployeeID, setNewEmployeeID] = useState(employee_id)
    const [newFosterID, setNewFosterID] = useState(foster_id)

    

    const removeSavedDog = () => {
        fetch(`http://localhost:4000/dogs`, {
            method:"POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              name: newDogName,
              image: newDogImage,
              shelter_id: newShelterID,
              breed_id: newBreedID,
              employee_id: newEmployeeID,
              foster_id: newFosterID
            })
    
        })
        .then(resp=>resp.json())
        .then(console.log)
    
        fetch(`http://localhost:4000/saves/${id}`, {
            method: "DELETE"
         })
    
    
    
        window.location.reload();
       
        
    }

    console.log(shelters[shelter_id])


   
    

    return (
        <div className="savedCard">
            <button className="savedCardDelete" onClick={removeSavedDog}><strong>X</strong></button>
            <h2 className="savedName">{name}</h2>
            <img className="savedImage" src={image} alt="Dog Image" />
            <h3>Contact: {employee.name}</h3>
            <h3>Location: {foster.address}</h3>
            {/* <h3 value={shelter_id}>Shelter: {shelters[shelter_id]} </h3> */}
            <EmployeeCardMiddle />
        </div>
    )
}

export default SavedDogCard