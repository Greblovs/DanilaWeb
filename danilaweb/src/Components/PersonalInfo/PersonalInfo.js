import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./PersonalInfo.module.scss"


const PersonalInfo = () =>{

    let globalWidth = window.innerWidth;
    return(
        <>

            <div className={classes.infoWrapper}>
                <span className={classes.Title}>
                    About Me
                </span>
                <div className={classes.aboutMeWrapper}>
                    {globalWidth > 1024 ?
                        <>
                            <div className={classes.textWrapper}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                            < div className = {classes.imageWrapper} >
                                </div>
                        </>
                        :
                        <>
                            < div className = {classes.imageWrapper} >
                            </div>
                            <div className={classes.textWrapper}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </>
                    }
                </div>

                <div className={classes.specificInfoWrapper}>
                    <div className={classes.info}>
                        <div className={classes.subTitle}>
                            Phone
                        </div>
                        <div className={classes.information}>
                            +380 040 145 565
                        </div>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.subTitle}>Email</div>
                        <div className={classes.information}>
                            batov@oregonstate.edu
                        </div>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.subTitle}>Address</div>
                        <div className={classes.information}>
                            Corvallis, OR 97333
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default PersonalInfo