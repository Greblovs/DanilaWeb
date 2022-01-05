import logo from './logo.svg';
import './App.css';
import Profile from "./Components/Profile/Profile";
import React  from "react";
import Menu from "./Components/Menu/Menu";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import Skills from "./Components/Skills/Skills";
import MyProjects from "./Components/My Projects/MyProjects";
import Footer from "./Components/Footer/Footer";

function App() {
    const ProfileRef = React.createRef()
    const SkillseRef = React.createRef()
    const MyProjectsRef = React.createRef()
    const FooterRef = React.createRef()

    const scrollDown = () =>{
        ProfileRef.current.scrollIntoView({behavior:'smooth'})
    }
    const scrollSkills = () => {
        SkillseRef.current.scrollIntoView({behavior:'smooth'})
    }
    const scrollMyProject = () => {
        MyProjectsRef.current.scrollIntoView({behavior:'smooth'})
    }
    const scrollFooter = () => {
        FooterRef.current.scrollIntoView({behavior:'smooth'})
    }

  return (
      <div>
          <Menu
            scrollProfile = {scrollDown}
            scrollSkills = {scrollSkills}
            scrollMyProject = {scrollMyProject}
            scrollFooter = {scrollFooter}
          />
          <Profile scrollDown = {scrollDown}/>
          <PersonalInfo prRef = {ProfileRef}/>
          <Skills prRef = {SkillseRef}/>
          <MyProjects prRef = {MyProjectsRef}/>
          <Footer
              prRef = {FooterRef}
              scrollProfile = {scrollDown}
              scrollSkills = {scrollSkills}
              scrollMyProject = {scrollMyProject}
              scrollFooter = {scrollFooter}
          />
      </div>
  );
}

export default App;
