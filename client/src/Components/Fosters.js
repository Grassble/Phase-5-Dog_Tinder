import React, { useState } from "react";
import FosterCard from "./FosterCard";

function Fosters({fosters, dogs, showEdit}) {

    const [fosterName, setFosterName] = useState('')
    const [fosterAddress, setFosterAddress] = useState('')

    const [fosterID, setFosterID] = useState()
    const [dogID, setDogID] = useState()



    const handleNewFoster = (e) => {
        e.preventDefault()
        fetch("http://localhost:4000/fosters", {
            method:"POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: fosterName,
                address: fosterAddress
            })

        })
        .then(resp=>resp.json())
        .then(console.log)

        window.location.reload();
    }

    const patchDog = (e) => {
        fetch(`http://localhost:4000/dogs/${dogID}`, {
            method: 'PATCH',
            body: JSON.stringify({
                foster_id: fosterID,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));

            window.location.reload();

    }

   

    return (
        <div id="formBody">
            <div id="buttonDiv">
                <button id="submit2" onClick={showEdit}>Employees</button>
            </div>
            <div>
                <div id="formContainer2">
                    <form id="fullForm" onSubmit={handleNewFoster}>
                        <fieldset>
                        <h1 className="formTitle">Add Foster</h1>
                        <div id="textName">
                            <input type="text" name="name" placeholder="Foster's Name" value={fosterName} onChange={(e) => setFosterName(e.target.value)}/>
                            <input type="text" name="address" placeholder="Foster's Address" value={fosterAddress} onChange={(e) => setFosterAddress(e.target.value)}/>
                        </div>
                        <button id="submit" type="submit">Add Foster</button>
                        </fieldset>
                    </form>
                </div>
                <div id="formContainer2">
                    <form id="fullForm" onSubmit={patchDog}>
                        <fieldset>
                        <h1 className="formTitle">Foster Dog</h1>
                        <div id="otherOptions">
                            <select id = "selectList" onChange={(e) => setDogID(e.target.value)}>
                                <option>--Dogs--</option>
                                {dogs.map(dog=><option value={dog.id}>{dog.name}</option>)}
                            </select>
                            <select id = "selectList" onChange={(e) => setFosterID(e.target.value)}>
                                <option>--Fosters--</option>
                                {fosters.map(foster=><option value={foster.id}>{foster.name}</option>)}
                            </select>
                        </div>
                        <br /><br />
                        <button id="submit" type="submit">Foster Dog</button>
                        </fieldset>
                    </form>
                </div>
                <div>
                    <h1>Fosters</h1>
                    {fosters.map(foster => (<FosterCard foster={foster} key={foster.id} />))}
                </div>
            </div>
        </div>

    );

}

export default Fosters