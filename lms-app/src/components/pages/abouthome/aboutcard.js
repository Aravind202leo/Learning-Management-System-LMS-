import React from "react"

import "./about.css"
import { homeAbout } from "./data"

const AboutCard = () => {
    return ( <>
        <section className = 'aboutHome' >
        <div className = 'container flexSB' >
        <
        div className = 'left row' ><
        /div> <
        div className = 'right row' >
        <
        div className = 'items' > {
            homeAbout.map((val) => {
                return ( <
                    div className = 'item flexSB' >
                    <
                    div className = 'img' >
                    <
                    img src = { val.cover }
                    alt = '' / >
                    <
                    /div> <
                    div className = 'text' >
                    <
                    h2 > { val.title } < /h2> <
                    p > { val.desc } < /p> < /
                    div > <
                    /div>
                )
            })
        } <
        /div> < /
        div > <
        /div> < /
        section > 
        <
        />
    )
}

export default AboutCard