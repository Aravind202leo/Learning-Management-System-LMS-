import React from "react";
import Typical from "react-typical";
import './top.css';
const Top = () => {
    return ( <
        div className = "top-container" >
        <
        div className = "top-parent" >
        <
        div className = "top-details" >
        <
        div className = "top-name" >
        <
        span className = "primary-text" > { " " }
        Hello < span className = "highlighted-text" > Gm < /span> < /
        span > <
        /div> <
        div className = "top-role" >
        <
        span className = "primary-text" > < /span> { " " } <
        h1 > { " " } <
        Typical loop = { Infinity }
        steps = {
            ["Welcome to Cogniwide", 1000,
                "Explore the best courses", 2000
            ]
        }
        /> < /
        h1 >
        <
        span className = "top-tag-line" >
        World 's best tutors are always there with you to guide you < /
        span > <
        /
        div >
        <
        div className = "top-options" >
        <
        button className = "btn highlighted-btn" > { " " }
        Get started { " " } <
        /button> < /
        div > <
        /
        div >
        <
        div className = "top-picture" >
        <
        div className = "top-picture-background" >
        <
        /div> < /
        div > <
        /div > < /
        div > )
}

export default Top;