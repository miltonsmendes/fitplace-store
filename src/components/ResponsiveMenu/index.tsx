import { useState } from "react";
import { StyleNavBar } from "./styles";

import { MenuItems } from "./MenuItems";

import { Logo } from "../Logo";


export function ResponsiveMenu() {
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(!clicked);
    }

    return (
        <StyleNavBar>
            <nav className="NavBarItems">

                <h1 className="navbar-logo">
                    <Logo />
                </h1>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
            </nav>

        </StyleNavBar>
    );
}