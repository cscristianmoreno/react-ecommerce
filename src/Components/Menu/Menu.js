import React, { useContext, useEffect, useState, createRef } from "react";
import "./Menu.css";
import Cookies from "universal-cookie";
import IconEffectContext from "../Context/IconEffectContext.js";

const cookies = new Cookies();

const Menu = () => {
    const { shopState, iconState, setIconState } = useContext(IconEffectContext);

    const [scroll, setScroll] = useState(0);
    const [menuClass, setMenuClass] = useState("class_header_menu_color_default");

    const menuRef = createRef();
    const menuResponsiveRef = createRef(); 
    const menuIconRef = createRef();

    useEffect(() => {
        if (shopState.name.length > 0) {
            setIconState("class_icon_effect_display");
        }
    }, []);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            const onScroll = () => {
                setScroll(window.pageYOffset);

                if (window.pageYOffset > 0) {
                    setMenuClass("class_header_menu_color_scroll");
                }
                else {
                    setMenuClass("class_header_menu_color_default");
                }
            }

            window.removeEventListener("scroll", onScroll);
            window.addEventListener("scroll", onScroll, { passive: true });
            return () => {
                window.removeEventListener("scroll", onScroll);
            }
        })
    }, []);

    const openMenu = () => {
        menuResponsiveRef.current.classList.toggle("class_menu_responsive_items_display");
        menuIconRef.current.classList.toggle(iconState);
    }

    return(
        <>
            <div ref={menuRef} className={"class_header_menu " + "class_menu_normal " + menuClass }>
                <div className="class_header_menu_title">
                    <div className="class_header_title_container">
                        <i className="fas fa-store"></i>
                        <span className="header_title">E-commerce</span>
                    </div>
                </div>

                <ul className="class_menu_items">
                    <li><a href={process.env.PUBLIC_URL}>Inicio</a></li>
                    <li><a href={process.env.PUBLIC_URL + "/#/productos"}>Nuestros productos</a></li>
                    <li><a href={process.env.PUBLIC_URL + "/#/proyecto"}>Acerca del proyecto</a></li>
                </ul>

                <div class="class_menu_icon_container">
                    <a href={process.env.PUBLIC_URL + "/#/compras"}><i className="fas fa-shopping-cart"/></a>
                    <i className={"fas fa-circle " + "class_icon_effect " + iconState}/>
                </div>
            </div>

            <div ref={menuRef} className={"class_header_menu " + "class_menu_responsive " + menuClass }>
                <div className="class_header_title_container">
                    <i className="fas fa-store"></i>
                    <span className="header_title">E-commerce</span>
                </div>

                <div class="class_menu_icon_container">
                    <i onClick={() => openMenu()} className="fas fa-bars"/>
                    <i ref={menuIconRef} className={"fas fa-circle " + "class_icon_effect " + iconState}/>
                </div>
            </div>

            <div ref={menuResponsiveRef} className="class_menu_responsive_items">

                <div className="class_menu_responsive_title">
                    <div class="class_menu_icon_container">
                        <a href={process.env.PUBLIC_URL + "/#/compras"}><i className="fas fa-shopping-cart"/></a>
                        <i className={"fas fa-circle " + "class_icon_effect " + iconState}/>
                    </div>
                </div>

                <ul className="class_menu_items">
                    <li><a href={process.env.PUBLIC_URL}>Inicio</a></li>
                    <li><a href={process.env.PUBLIC_URL + "/#/productos"}>Nuestros productos</a></li>
                    <li><a href={process.env.PUBLIC_URL + "/#/proyecto"}>Acerca del proyecto</a></li>
                </ul>
            </div>
        </>
    );
}

export default Menu; 