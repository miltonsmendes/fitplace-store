import { useContext, useState } from "react";
import { useCartModal } from "../../hooks/useCartModal";

import { MenuItems } from "./MenuItems";

import { StyleNavBar } from "./styles";
import { Logo } from "../Logo";



export function ResponsiveMenu() {
    const {openModal} = useCartModal();


    const [clicked, setClicked] = useState(false);



    function handleClickMenu() {
        setClicked(!clicked);
    }

    return (
        <StyleNavBar>
            <nav className="NavBarItems">

                <div className="logo-container">
                    <h1 className="navbar-logo">
                        <Logo />
                    </h1>
                </div>

                

                <div className="menu-icon" onClick={handleClickMenu}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <div className="cart-icon-container" onClick={openModal}>
                    <i className="fas fa-shopping-cart"></i>
                    <div className="amount-cart">1</div>
                </div>

                <div className="links-container">
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
                </div>


            </nav>

        </StyleNavBar>
    );
}