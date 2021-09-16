import React from 'react';
import './Menu.scss';
import SmoothScrolling from "../SmoothScrolling/SmoothScrolling";
const Menu = (props) => {
    const scrolTo = (id) =>SmoothScrolling.scrollTo(`${id}`);
    return(
        <ul className="menu">
            <li className="header-menu-element" onClick={()=>scrolTo("home")}>Home</li>
            <li className="header-menu-element" onClick={()=>scrolTo("about")}>About Me</li>
            <li className="header-menu-element" onClick={()=>scrolTo("portfolio")}>Projects</li>
            <li className="header-menu-element" onClick={()=>scrolTo("contacts")}>Contacts</li>
        </ul>
    );
}

export default Menu;