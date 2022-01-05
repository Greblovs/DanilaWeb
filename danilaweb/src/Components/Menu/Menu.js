import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./Menu.module.scss"

const Menu = (props) => {
    return(
        <div className={classes.menu}>
            <div className={classes.menuList}>
                <div onClick={props.scrollProfile} className={classes.menuElement}>Profile</div>
                <div onClick={props.scrollSkills} className={classes.menuElement}>Skills</div>
                <div onClick={props.scrollMyProject} className={classes.menuElement}>Projects</div>
                <div onClick={props.scrollFooter} className={classes.menuElement}>Contacts</div>
            </div>
        </div>
    )
}
export default Menu;