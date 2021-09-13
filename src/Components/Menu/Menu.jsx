import React from 'react';
import './Menu.scss';
const Menu = (props) => {
    return(
        <ul className="menu">
            <li className="header-menu-element"><a href="#"> Home</a></li>
            <li className="header-menu-element"><a href="#"> About Me</a></li>
            <li className="header-menu-element"><a href="#"> Projects</a></li>
            <li className="header-menu-element"><a href="#"> Contacts</a></li>
        </ul>
    );
}

export default Menu;