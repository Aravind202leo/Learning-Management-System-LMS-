import React from "react"

import "./about.css"
import { homeAbout } from "./data"
import Wrapper from "./wrapper"

const AboutCard = () => {
    return ( <
        >
        <
        section className = 'aboutHome' >
        <
        div className = 'container flexSB' >
        <
        div className = 'left row' >
        <
        img src = './images/about.webp'
        alt = '' / >
        <
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
        section > <
        Wrapper / >
        <
        />
    )
}

export default AboutCard