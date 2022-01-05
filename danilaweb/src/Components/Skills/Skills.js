import React, {Component, useCallback, useEffect, useRef, useState} from "react";
import classes from "./Skills.module.scss"


const Skills = () =>{
    return(
    <div className={classes.skillsWrapper}>
        <div className={classes.title}>
            My Skills
        </div>
        <div className={classes.columnWrapper}>
            <div className={classes.leftColumn}>
                <div className={classes.section}>
                    <div className={classes.sectionTitle}>Languages</div>
                    <div className={classes.sectionSkillList}>
                        <div className={classes.skill}>
                            <span className={classes.text}> C++</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 160}}>
                                </div>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <span className={classes.text}> C#</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 100}}>
                                </div>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <span className={classes.text}>Python</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 130}}>
                                </div>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <span className={classes.text}>JavaScript</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 70}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.section}>
                    <div className={classes.sectionTitle}>Computer Graphics</div>
                    <div className={classes.sectionSkillList}>
                        <div className={classes.skill}>
                            <span className={classes.text}>Blender</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 160}}>
                                </div>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <span className={classes.text}>Vulkan</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 100}}>
                                </div>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <span className={classes.text}>Maya</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 130}}>
                                </div>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <span className={classes.text}>Fusion</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 70}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.rightColumn}>
                <div className={classes.section}>
                    <div className={classes.sectionTitle}>Game Dev</div>
                    <div className={classes.sectionSkillList}>
                        <div className={classes.skill}>
                            <span className={classes.text}>Unity</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 160}}>
                                </div>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <span className={classes.text}>Unreal Engine</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 100}}>
                                </div>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <span className={classes.text}>Python</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 130}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.section}>
                    <div className={classes.sectionTitle}>Web Dev</div>
                    <div className={classes.sectionSkillList}>
                        <div className={classes.skill}>
                            <span className={classes.text}>JavaScript</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 160}}>
                                </div>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <span className={classes.text}>Html\CSS</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 100}}>
                                </div>
                            </div>
                        </div>
                        <div className={classes.skill}>
                            <span className={classes.text}>NodeJS</span>
                            <div className={classes.line}>
                                <div className={classes.actualLine} style={{"width": 130}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    )
}

export default Skills
