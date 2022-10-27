import React, { useState } from "react";
import DogCard from "./DogCard";
import '../App.css';

function NewDog({dogs, breeds, shelters, fosters, employees}) {

    const [dogName, setDogName] = useState('')
    const [dogImage, setDogImage] = useState('')
    const [shelterID, setShelterID] = useState()
    const [breedID, setBreedID] = useState()
    const [employeeID, setEmployeeID] = useState()
    const [fosterID, setFosterID] = useState()

    const handleNewDog = (e) => {
        e.preventDefault()
        fetch("http://localhost:4000/dogs", {
            method:"POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: dogName,
                image: dogImage,
                shelter_id: shelterID,
                breed_id: breedID,
                employee_id: employeeID,
                foster_id: fosterID
            })

        })
        .then(resp=>resp.json())
        .then(console.log)

        window.location.reload();
    }


    return(
        <div id="formBody">
            <div id="formContainer">
                <form id="fullForm" onSubmit={handleNewDog}>
                    <fieldset>
                    <h1 className="formTitle">Add a Dog</h1>
                    <div id="textName">
                        <input type="text" name="name" placeholder="Dog's Name" value={dogName} onChange={(e) => setDogName(e.target.value)}/>
                        <input type="text" name="image" placeholder="Dog's Image" value={dogImage} onChange={(e) => setDogImage(e.target.value)}/>
                    </div>
                    <div id="otherOptions">
                        <select id = "selectList" onChange={(e) => setBreedID(e.target.value)}>
                            <option>--Breed--</option>
                            {breeds.map(breed=><option value={breed.id}>{breed.name}</option>)}
                        </select>
                        <select id = "selectList" onChange={(e) => setShelterID(e.target.value)}>
                            <option>--Shelter--</option>
                            {shelters.map(shelter=><option value={shelter.id}>{shelter.name}</option>)}
                        </select><br/>
                        <select id = "selectList" onChange={(e) => setEmployeeID(e.target.value)}>
                            <option>--Employee--</option>
                            {employees.map(employee=><option value={employee.id}>{employee.name}</option>)}
                        </select><br/>
                        <select id = "selectList" onChange={(e) => setFosterID(e.target.value)}>
                            <option>--Foster--</option>
                            {fosters.map(foster=><option value={foster.id}>{foster.name}</option>)}
                        </select>
                    </div>
                    <br /><br />
                    <button id="submit" type="submit">Add Dog</button>
                    </fieldset>
                </form>
            </div>
        <div>
            <h1>Dog List</h1>
            {dogs.map(dog => (<DogCard dog={dog} key={dog.id} fosters={fosters}/>))}
            </div>
        </div>
    );
}

export default NewDog