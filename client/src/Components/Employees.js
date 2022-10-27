import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";

function Employees({employees, dogs, showEdit}) {

    const [employeeName, setEmployeeName] = useState('')
    const [employeeJob, setEmployeeJob] = useState('')

    const [employeeID, setEmployeeID] = useState()
    const [dogID, setDogID] = useState()

    const handleNewEmployee = (e) => {
        e.preventDefault()
        fetch("http://localhost:4000/employees", {
            method:"POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: employeeName,
                job: employeeJob
            })

        })
        .then(resp=>resp.json())
        .then(console.log)

        window.location.reload();
    }

    const patchEmployee = (e) => {
        fetch(`http://localhost:4000/dogs/${dogID}`, {
            method: 'PATCH',
            body: JSON.stringify({
                employee_id: employeeID,
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
                <button id="submit2" onClick={showEdit}>Fosters</button>
            </div>
           <div>
            <div id="formContainer2">
                <form id="fullForm" onSubmit={handleNewEmployee}>
                    <fieldset>
                    <h1 className="formTitle">Add Employee</h1>
                    <div id="textName">
                        <input type="text" name="name" placeholder="Employee's Name" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)}/>
                        <input type="text" name="address" placeholder="Employee's Job" value={employeeJob} onChange={(e) => setEmployeeJob(e.target.value)}/>
                    </div>
                    <button id="submit" type="submit">Add Employee</button>
                    </fieldset>
                </form>
            </div>
            <div id="formContainer2">
                <form id="fullForm"  onSubmit={patchEmployee}>
                    <fieldset>
                    <h1 className="formTitle">Employee's Dog</h1>
                    <select id = "selectList" onChange={(e) => setDogID(e.target.value)}>
                        <option>--Dogs--</option>
                        {dogs.map(dog=><option value={dog.id}>{dog.name}</option>)}
                    </select>
                    <select id = "selectList" onChange={(e) => setEmployeeID(e.target.value)}>
                        <option>--Employees--</option>
                        {employees.map(employee=><option value={employee.id}>{employee.name}</option>)}
                    </select>
                    <br /><br />
                    <button id="submit" type="submit">Set Employee</button>
                    </fieldset>
                </form>
            </div>
                <div>
                    <h1>Employees</h1>
                    {employees.map(employee => (<EmployeeCard employee={employee} key={employee.id} />))}
                </div>
            </div>
        </div>
    )
}

export default Employees