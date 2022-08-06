import './footer.css';
import Itemcontainer from "./itemscontainer";
import Sicons from "./icons";
import { Icons } from "./menus";
const Footer = () => {
    return ( <footer className = "bg-gray-900 text-white" >

        <
        Itemcontainer / >
        <
        hr / >
        <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8" >

        <span > ©2022 Cogniwide.All rights reserved. </span>  
        <span > Terms· Privacy Policy </span>  <
        Sicons Icons = { Icons }
        / >   </div> </footer>
    );

}
export default Footer;