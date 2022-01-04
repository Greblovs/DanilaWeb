import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./Menu.module.scss"

const Menu = () => {
    return(
        <div className={classes.menu}>
            <div className={classes.menuList}>
                <div className={classes.menuElement}>Profile</div>
                <div className={classes.menuElement}>Skills</div>
                <div className={classes.menuElement}>Projects</div>
                <div className={classes.menuElement}>Contacts</div>
            </div>
        </div>
    )
}
export default Menu;