import logo from './logo.svg';
import './App.css';
import Profile from "./Components/Profile/Profile";
import React  from "react";
import Menu from "./Components/Menu/Menu";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";


function App() {
  return (
      <div >
          <Profile/>
          <Menu/>
          <PersonalInfo/>

      </div>
  );
}

export default App;
