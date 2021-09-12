import React from 'react';
import './Menu.scss';
const Menu = (props) => {
    return(
        <ul className="menu">
            <li className="header-menu-element">Home</li>
            <li className="header-menu-element">About Me</li>
            <li className="header-menu-element">Projects</li>
            <li className="header-menu-element">Contacts</li>
        </ul>
    );
}

export default Menu;