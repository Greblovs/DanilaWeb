import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./Footer.module.scss"



const Footer = (props) => {


    return(
        <div ref = {props.prRef}  className={classes.Footer}>
            <div className={classes.contentWrapper}>
                <div className={classes.socialNetworks}>
                    <span className={classes.subTitle}>Social Networks</span>
                    <span className={classes.entery}>Instagram</span>
                    <span className={classes.entery}>Telegram</span>
                    <span className={classes.entery}>LinkedIn</span>
                </div>
                <div className={classes.contacts}>
                    <span className={classes.subTitle}>Contacts</span>
                    <span className={classes.entery}>Danila@oregonstate.edu</span>
                    <span className={classes.entery}>Corvallis OR, 97333</span>
                </div>
                <div className={classes.map}>
                    <span className={classes.subTitle}>Website Map</span>
                    <span onClick={props.scrollProfile} className={classes.entery}>Profile</span>
                    <span onClick={props.scrollSkills} className={classes.entery}>Skills</span>
                    <span onClick={props.scrollMyProject} className={classes.entery}>Projects</span>
                    <span onClick={props.scrollFooter} className={classes.entery}>Contacts</span>
                </div>
                <div className={classes.support}>
                    <span className={classes.subTitle}>Resume</span>
                    <span className={classes.entery}>Download</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;