import React from 'react';
import './Menu.scss';
import SmoothScrolling from "../SmoothScrolling/SmoothScrolling";
import {useRef} from "react";

const Menu = (props) => {
    const scrolTo = (id) => SmoothScrolling.scrollTo(`${id}`);
    const menu = useRef(null);
    const toggleMenu = () => {
        // console.log (Object.entries(menu.current.classList));
        if (Object.entries(menu.current.classList).length === 2) {
            menu.current.style.top = -500 + "px";
            setTimeout(() => {
                menu.current.classList.toggle("menuOn")
            }, 1000);
        } else {
            menu.current.style.top = 45 + "px";
            menu.current.classList.toggle("menuOn");
        }

    };
    return (
        <>
            <p id="burger-switch" onClick={toggleMenu}>&#9776;</p>
            <ul className="menu" ref={menu}>
                <li className="header-menu-element" onClick={() => scrolTo("home")}>Home</li>
                <li className="header-menu-element" onClick={() => scrolTo("about")}>About Me</li>
                <li className="header-menu-element" onClick={() => scrolTo("portfolio")}>Projects</li>
                <li className="header-menu-element" onClick={() => scrolTo("contacts")}>Contacts</li>
            </ul>
        </>
    );
}

export default Menu;