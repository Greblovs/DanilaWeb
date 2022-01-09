import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./PersonalInfo.module.scss"


const PersonalInfo = (props) =>{

    let globalWidth = window.innerWidth;
    return(
        <>

            <div ref={props.prRef} className={classes.infoWrapper}>
                <span  className={classes.Title}>
                    About Me
                </span>
                <div className={classes.aboutMeWrapper}>
                    {globalWidth > 1024 ?
                        <>
                            <div className={classes.textWrapper}>
                            I am an undergraduate Computer Science student at Oregon State University. In my free from studing time, 
                            I test gameplay ideas in open game engines like Unity and Unreal Engine 4. 
                            My primal interests are game design and gameplay mechanics implementation.
                            </div>
                            < div className = {classes.imageWrapper} >
                                </div>
                        </>
                        :
                        <>
                            < div className = {classes.imageWrapper} >
                            </div>
                            <div className={classes.textWrapper}>
                            I am an undergraduate Computer Science student at Oregon State University. In my free from studing time, 
                            I test gameplay ideas in open game engines like Unity and Unreal Engine 4. 
                            My primal interests are game design and gameplay mechanics implementation.
                            </div>
                        </>
                    }
                </div>

                <div  className={classes.specificInfoWrapper}>
                    <div className={classes.info}>
                        <div className={classes.subTitle}>
                            Phone
                        </div>
                        <div className={classes.information}>
                            +1 (541) 908 9677
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