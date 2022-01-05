import logo from './logo.svg';
import './App.css';
import Profile from "./Components/Profile/Profile";
import React  from "react";
import Menu from "./Components/Menu/Menu";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import Skills from "./Components/Skills/Skills";

function App() {
    const ProfileRef = React.createRef()
    const scrollDown = () =>{
        ProfileRef.current.scrollIntoView({behavior:'smooth'})
    }
  return (
      <div>
          <Menu/>
          <Profile scrollDown = {scrollDown}/>
          <PersonalInfo prRef = {ProfileRef}/>
          <Skills/>
      </div>
  );
}

export default App;
