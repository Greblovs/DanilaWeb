import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./Profile.module.scss"
import image from "../../Icons/Instagram.png"
import github from "../../Icons/github-11-32.png"
import linkedIn from "../../Icons/linkedin-32.png"
import email from "../../Icons/email-32.ico"


const Profile = (props) =>{



    return (
        <div className={classes.profile}>
            <span className={classes.name}>Danila Batov</span>
            <span className={classes.role}>Game Developer</span>
            <div className={classes.socialNetworks}>
                <a href ="https://www.instagram.com/thegreatteaparty/">
                    <img className={classes.icon} src={image}/>
                </a>
                <a href ="https://github.com/batovski">
                    <img className={classes.icon} src={github}/>
                </a>
                <a href ="https://www.linkedin.com/in/danila-batov-57134b1b6/">
                    <img className={classes.icon} src={linkedIn}/>
                </a>
                <a href ="mailto:mebatovd@oregonstate.edu">
                    <img className={classes.icon} src={email}/>
                </a>
            </div>
            <div onClick={props.scrollDown} className={classes.arrowDown}>
            </div>
        </div>

    )
}

export default Profile;