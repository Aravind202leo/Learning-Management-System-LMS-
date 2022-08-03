import React from "react";
import { IonIcon } from "@ionic/react";
const Sicons = ({ Icons }) => {
    return ( <
        div className = "text-blue-500" > {
            Icons.map((icon) => ( <
                span key = { icon.name }
                className = "p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-blue-500 duration-300" >
                <
                IonIcon icon = { icon.name }
                /> < /
                span >

            ))
        } <
        /div>
    );
};

export default Sicons;