import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./Profile.module.scss"
import image from "../../Icons/Instagram.png"
import github from "../../Icons/github-11-32.png"
import linkedIn from "../../Icons/linkedin-32.png"
import email from "../../Icons/email-32.ico"


const Profile = () =>{
    return (
        <div className={classes.profile}>
            <span className={classes.name}>Danila Batov</span>
            <span className={classes.role}>Game Developer</span>
            <div className={classes.socialNetworks}>
                <img className={classes.icon} src={image}/>
                <img className={classes.icon} src={github}/>
                <img className={classes.icon} src={linkedIn}/>
                <img className={classes.icon} src={email}/>
            </div>
            <div className={classes.arrowDown}>
            </div>
        </div>

    )
}

export default Profile;