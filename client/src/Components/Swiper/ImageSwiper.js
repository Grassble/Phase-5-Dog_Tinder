import React, { useState } from "react";
// import logo from "./logo.svg";
import '../../App.css'
import DragMove from "./DragMove";

function ImageSwiper({dog: {id, name, image, shelter_id, breed_id, employee_id, foster_id}}) {

  const [newDogName, setNewDogName] = useState(name)
  const [newDogImage, setNewDogImage] = useState(image)
  const [newShelterID, setNewShelterID] = useState(shelter_id)
  const [newBreedID, setNewBreedID] = useState(breed_id)
  const [newEmployeeID, setNewEmployeeID] = useState(employee_id)
  const [newFosterID, setNewFosterID] = useState(foster_id)

  const addSavedDog = (e) => {
    postSavedDog(e)
  }

  const postSavedDog = (e) => {
    fetch(`http://localhost:4000/saves`, {
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

    fetch(`http://localhost:4000/dogs/${id}`, {
            method: "DELETE"
        })

    window.location.reload();
    
}

  const [translate, setTranslate] = useState({
    x: 0,
    y: 0
  });

  const deleteDog = (e) => {
    fetch(`http://localhost:4000/dogs/${id}`, {
            method: "DELETE"
        })

      window.location.reload();
  }


 

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY

      
    });
    let x = e.clientX

    if (x <= 500) {
      deleteDog(e)
      } if (x >= 1300) {
      addSavedDog(e)
      }
  };


  return (
    <div className="App">
      <header className="App-header">
        <DragMove onDragMove={handleDragMove} >
          <div
            style={{
              transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
            }}
          >
            <img src={image} className="tinderImage" alt="logo" />
          </div>
        </DragMove>
      </header>
    </div>
  );
}

export default ImageSwiper;