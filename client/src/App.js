import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Nav from "./Components/Nav";
import Login from "./Components/Auth/Login";
import NewDog from "./Components/NewDog";
import Fosters from "./Components/Fosters";
import ImageSwiper from "./Components/Swiper/ImageSwiper";
import SavedDogs from "./Components/Swiper/SavedDogs";
import Employees from "./Components/Employees";
import './darkMode.css';
export const Context = React.createContext();


function App() {


  const [dogs, setDogs] = useState([])
  const [breeds, setBreeds] = useState([])
  const [shelters, setShelters] = useState([])
  const [employees, setEmployees] = useState([])
  const [fosters, setFosters] = useState([])
  const [toggleEdit, setToggleEdit] = useState(true)

  const [theme, setTheme] = useState('light')
  const [fosterTitle, setFosterTitle] = useState(false)

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light');
    }
    console.log(theme)
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    fetch("http://localhost:4000/dogs")
    .then((r) => r.json())
    .then((data) => setDogs(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/breeds")
    .then((r) => r.json())
    .then((data) => setBreeds(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/shelters")
    .then((r) => r.json())
    .then((data) => setShelters(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/employees")
    .then((r) => r.json())
    .then((data) => setEmployees(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/fosters")
    .then((r) => r.json())
    .then((data) => setFosters(data))
  }, []);

  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  const changeTitle = () => {
    setFosterTitle(!fosterTitle)
  }
    

  const showEdit = () => {
    setToggleEdit(toggleEdit => !toggleEdit)
    changeTitle()
}

  return (
    <BrowserRouter>
    <Context.Provider value={[fosterTitle, setFosterTitle]}>
      <div className={`App ${theme}`}>
        <Nav user={user} setUser={setUser} toggleTheme={toggleTheme} showEdit={showEdit}/>
        <Switch>
          <Route exact path="/">
            <Login user={user} setUser={setUser} onLogin={setUser}/>
          </Route>
          <Route path="/tinder">
            <h1 className="Tinder">Swipe Left To Remove, Swipe Right to Save</h1>
            {dogs.map(dog => (<ImageSwiper dog={dog} key={dog.id} fosters={fosters}/>))}
          </Route>
          <Route path="/new">
            <NewDog dogs={dogs} breeds={breeds} shelters={shelters} employees={employees} fosters={fosters}/>
          </Route>
          <Route path="/foster">
            <div>{toggleEdit ? (<Fosters fosters={fosters} dogs={dogs} showEdit={showEdit}/>) : (<Employees employees={employees} dogs={dogs} showEdit={showEdit}/>)}</div>
          </Route>
          <Route path="/saves">
            <SavedDogs employees={employees} shelters={shelters}/>
          </Route>
        </Switch>
      </div>
    </Context.Provider>
    </BrowserRouter>
  );

}

export default App;