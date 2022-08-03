import React from "react";
import Item from "./items";
import { Courses, EXTRA, ART, COMPANY } from "./menus";

const Itemcontainer = () => {
    return ( <
        div className = "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap 6 sm:px-8 px-5 py-16" >
        <
        Item Links = { Courses }
        title = "COURSES" / >
        <
        Item Links = { ART }
        title = "POPULAR ARTICLES" / >
        <
        Item Links = { EXTRA }
        title = "RESOURCES" / >
        <
        Item Links = { COMPANY }
        title = "COMPANY" / >
        <
        /div>
    );
};
export default Itemcontainer;