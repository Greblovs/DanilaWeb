import logo from './logo.svg';
import './App.css';
import Profile from "./Components/Profile/Profile";
import React  from "react";
import Menu from "./Components/Menu/Menu";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";


function App() {
  return (
      <>
          <Profile/>
          <Menu/>
          <PersonalInfo/>

      </>
  );
}

export default App;
