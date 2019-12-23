import React from "react";
import AddPerson from './addPerson';
import DisplayPerson from './displayPerson';
import './App.css';


function App() {

  return (
    <div className="App">
      <h1>Address Book</h1>
      <AddPerson />
      <DisplayPerson />

    </div>
  );
}

export default App;
