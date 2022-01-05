import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./Myprojects.module.scss"


const MyProjects = (props) =>{
    const first = "../../Icons/first.png"

    let width = window.innerWidth

    return(
        <div ref={props.prRef} className={classes.ProjectWrapper}>
            <div className={classes.Title}> My Projects</div>
            <div className={classes.projectBox + " " + classes.first }>
                <div className={classes.projectInfo}>
                    <div className={classes.projectTitle}>
                        Title
                    </div>
                    <div className={classes.projectText}>
                        Lorem ipsum dolor sit amet, mpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                    </div>
                    <div className={classes.projectTags}></div>
                </div>
                {width>=1024 ?
                <div className={classes.Interface}>
                    <div className={classes.button}>
                        <div className={classes.github}>
                        </div>
                    </div>
                    <div className={classes.tags}>
                        <div className={classes.tag}>
                            <div className={classes.tagIcon}></div>
                            Unity
                        </div>
                        <div className={classes.tag}>
                            <div className={classes.tagIcon}></div>
                            C#
                        </div>
                        <div className={classes.tag}>
                            <div className={classes.tagIcon}></div>
                            Unreal Engine
                        </div>
                        <div className={classes.tag}>
                            <div className={classes.tagIcon}></div>
                            Pixel Art
                        </div>
                    </div>
                </div>
                :
                    <div className={classes.Interface}>
                        <div className={classes.tags}>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Unity
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                C#
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Unreal Engine
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Pixel Art
                            </div>
                        </div>
                        <div className={classes.button}>
                            <div className={classes.github}>
                            </div>
                        </div>
                    </div>
                    }

            </div>



            <div className={classes.projectBox + " " + classes.first }>
                <div className={classes.projectInfo}>
                    <div className={classes.projectTitle}>
                        Title
                    </div>
                    <div className={classes.projectText}>
                        Lorem ipsum dolor sit amet, mpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                    </div>
                    <div className={classes.projectTags}></div>
                </div>
                {width>=1024 ?
                    <div className={classes.Interface}>
                        <div className={classes.button}>
                            <div className={classes.github}>
                            </div>
                        </div>
                        <div className={classes.tags}>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Unity
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                C#
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Unreal Engine
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Pixel Art
                            </div>
                        </div>
                    </div>
                    :
                    <div className={classes.Interface}>
                        <div className={classes.tags}>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Unity
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                C#
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Unreal Engine
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Pixel Art
                            </div>
                        </div>
                        <div className={classes.button}>
                            <div className={classes.github}>
                            </div>
                        </div>
                    </div>
                }

            </div>




            <div className={classes.projectBox + " " + classes.first }>
                <div className={classes.projectInfo}>
                    <div className={classes.projectTitle}>
                        Title
                    </div>
                    <div className={classes.projectText}>
                        Lorem ipsum dolor sit amet, mpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                    </div>
                    <div className={classes.projectTags}></div>
                </div>
                {width>=1024 ?
                    <div className={classes.Interface}>
                        <div className={classes.button}>
                            <div className={classes.github}>
                            </div>
                        </div>
                        <div className={classes.tags}>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Unity
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                C#
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Unreal Engine
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Pixel Art
                            </div>
                        </div>
                    </div>
                    :
                    <div className={classes.Interface}>
                        <div className={classes.tags}>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Unity
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                C#
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Unreal Engine
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Pixel Art
                            </div>
                        </div>
                        <div className={classes.button}>
                            <div className={classes.github}>
                            </div>
                        </div>
                    </div>
                }

            </div>

        </div>
    )
}

export default MyProjects
