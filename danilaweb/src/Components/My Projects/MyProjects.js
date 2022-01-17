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
                        Rogues` Tales
                    </div>
                    <div className={classes.projectText}>
                    Rogues` Tales is a dynamic Pixel Action-RPG in the Roguelike genre for android devices. 
                    It is being developed in a team of 3 people. I was a leading programmer and designer responsible for core mechanics design and implementation. <br /> <br />
                        <li>Created Random Dungeon generation </li>
                        <li>Designed and Implemented gameplay loop  </li>
                        <li>Design and implement Player stats  </li>
                </div>
                    <div className={classes.projectTags}></div>
                </div>
                {width>=1024 ?
                <div className={classes.Interface}>
                    <div className={classes.button}>
                            <a href ="https://play.google.com/store/apps/details?id=com.TheGreatTeaParty.RoguesTales">
                                <div className={classes.googlePlay}>
                                </div>
                            </a>
                            <a href ="https://github.com/TheGreatTeaParty/RogueUltimate">
                                <div className={classes.github}>
                                </div>
                            </a>
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
                            Game Design
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
                                Game Design
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



            <div className={classes.projectBox + " " + classes.second }>
                <div className={classes.projectInfo}>
                    <div className={classes.projectTitle}>
                        Roop
                    </div>
                    <div className={classes.projectText}>
                    Roop is a simulator of a clerk that understands that his life is nothing but an infinite loop. The game was created for Ludum Dare 47 within 72 hours. I was responsible for interaction mechanics, sound, and level design.  <br /> <br />
                        <li>Created the office level</li>
                        <li>Created dialogs and interaction mechanics</li>
                        <li>Created audio design</li>
                    </div>
                    <div className={classes.projectTags}></div>
                </div>
                {width>=1024 ?
                    <div className={classes.Interface}>
                        <div className={classes.button}>
                            <a href ="https://thegreatteaparty.itch.io/roop">
                                <div className={classes.itchIO}>
                                </div>
                            </a>
                            <a href ="https://github.com/Lev4iks/supreme-eureka">
                                <div className={classes.github}>
                                </div>
                            </a>
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
                                Audio Design
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Level Design
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
                                Audio Design
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Level Design
                            </div>
                        </div>
                        <div className={classes.button}>
                            <div className={classes.github}>
                            </div>
                        </div>
                    </div>
                }

            </div>




            <div className={classes.projectBox + " " + classes.third }>
                <div className={classes.projectInfo}>
                    <div className={classes.projectTitle}>
                        Augmented Reality Sandbox
                    </div>
                    <div className={classes.projectText}>
                        AR Sandbox is a university Capstone project. It is designed to help civil engineers to learn about natural disasters' consequences through the sandbox interaction. <br />  <br />
                        <li>Created Natural disasters Visualization </li>
                        <li>Integrated teammates components into Unity </li>
                        <li>Practiced Agile development</li>
                </div>
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
                                AR
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Agile
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
                                AR
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Agile
                            </div>
                        </div>
                        <div className={classes.button}>
                            <div className={classes.github}>
                            </div>
                        </div>
                    </div>
                }

            </div>

            <div className={classes.projectBox + " " + classes.fourth }>
                <div className={classes.projectInfo}>
                    <div className={classes.projectTitle}>
                       Isometric Game Prototype
                    </div>
                    <div className={classes.projectText}>
                    It is an Isometric Game Prototype to test A* understanding with Perlin noise hex map generation.
                        <br /> <br />
                        <li>Created A* pathfinding for Hex map wth optimization modification</li>
                        <li>Created Hex map generation procces using Perlin noise </li>
                        <li>Implemented Day/Night cycle  </li>
                </div>
                    <div className={classes.projectTags}></div>
                </div>
                {width>=1024 ?
                <div className={classes.Interface}>
                    <div className={classes.button}>
                            <a href ="https://github.com/batovski/IsometricPrototype">
                                <div className={classes.github}>
                                </div>
                            </a>
                    </div>
                    <div className={classes.tags}>
                        <div className={classes.tag}>
                            <div className={classes.tagIcon}></div>
                            UE4
                        </div>
                        <div className={classes.tag}>
                            <div className={classes.tagIcon}></div>
                            C++
                        </div>
                        <div className={classes.tag}>
                            <div className={classes.tagIcon}></div>
                            Blueprint
                        </div>
                        <div className={classes.tag}>
                            <div className={classes.tagIcon}></div>
                            A*
                        </div>
                    </div>
                </div>
                :
                    <div className={classes.Interface}>
                        <div className={classes.tags}>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                UE4
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                C++
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                Blueprint
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                A*
                            </div>
                        </div>
                        <div className={classes.button}>
                            <div className={classes.github}>
                            </div>
                        </div>
                    </div>
                    }

            </div>

            <div className={classes.projectBox + " " + classes.fifth }>
                <div className={classes.projectInfo}>
                    <div className={classes.projectTitle}>
                        2D Multiplayer Game Prototype
                    </div>
                    <div className={classes.projectText}>
                    It is a multiplayer game prototype with a custom server/client implementation using Unity. 
                    <br /> <br />
                        <li>Created Server using .Net </li>
                        <li>Implemented TCP/UDP communication protocols </li>
                        <li>Synchronized Characters Position and Animation</li>
                </div>
                    <div className={classes.projectTags}></div>
                </div>
                {width>=1024 ?
                <div className={classes.Interface}>
                    <div className={classes.button}>
                            <a href ="https://youtu.be/_HcFK6W8wvA">
                                <div className={classes.youtube}>
                                </div>
                            </a>
                            <a href ="https://github.com/batovski/Client-Server">
                                <div className={classes.github}>
                                </div>
                            </a>
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
                            .Net
                        </div>
                        <div className={classes.tag}>
                            <div className={classes.tagIcon}></div>
                            TCP / UDP
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
                                .Net
                            </div>
                            <div className={classes.tag}>
                                <div className={classes.tagIcon}></div>
                                TCP / UDP
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
