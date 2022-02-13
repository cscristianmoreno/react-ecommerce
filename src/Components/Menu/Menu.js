import React, { useContext, useEffect, useState, createRef } from "react";
import "./Menu.css";
import Cookies from "universal-cookie";
import IconEffectContext from "../Context/IconEffectContext.js";
import ImagenMenu from "./images/ImagenMenu.js";

const cookies = new Cookies();

const Menu = () => {
    const { shopState, iconState, setIconState } = useContext(IconEffectContext);

    const [scroll, setScroll] = useState(0);
    const [menuClass, setMenuClass] = useState("class_header_menu_color_default");

    const menuRef = createRef();
    const menuResponsiveRef = createRef(); 
    const menuIconRef = createRef();

    const menuItemInicio = createRef();
    const menuItemProductos = createRef();
    const menuItemProyecto = createRef();

    const menuResponsiveItemInicio = createRef();
    const menuResponsiveItemProductos = createRef();
    const menuResponsiveItemProyecto = createRef();

    useEffect(() => {
        if (shopState.name.length > 0) {
            setIconState("class_icon_effect_display");
        }
        
        const path = window.location.href.split("/").pop();

        console.log(path);

        switch(path) {
            case "productos": {
                menuItemProductos.current.classList.add("class_menu_item_path");
                menuResponsiveItemProductos.current.classList.add("class_menu_item_path");
                break;
            }
            case "proyecto": {
                menuItemProyecto.current.classList.add("class_menu_item_path");
                menuResponsiveItemProyecto.current.classList.add("class_menu_item_path");
                break;
            }
            default: {
                menuItemInicio.current.classList.add("class_menu_item_path");
                menuResponsiveItemInicio.current.classList.add("class_menu_item_path");
                break;
            }
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

        if (iconState.length > 0) {
            menuIconRef.current.classList.toggle(iconState);
        }
    }

    return(
        <>
            <div ref={menuRef} className={"class_header_menu " + "class_menu_normal " + menuClass }>
                <div className="class_header_menu_title">
                    <div className="class_header_title_container">
                        <a href={process.env.PUBLIC_URL}><ImagenMenu /></a>
                    </div>
                </div>

                <ul className="class_menu_items">
                    <li><a ref={menuItemInicio} href={process.env.PUBLIC_URL}>Inicio</a></li>
                    <li><a ref={menuItemProductos} href={process.env.PUBLIC_URL + "/#/productos"}>Nuestros productos</a></li>
                    <li><a ref={menuItemProyecto} href={process.env.PUBLIC_URL + "/#/proyecto"}>Acerca del proyecto</a></li>
                </ul>

                <div class="class_menu_icon_container">
                    <a href={process.env.PUBLIC_URL + "/#/compras"}><i className="fas fa-shopping-cart"/></a>
                    <i className={"fas fa-circle " + "class_icon_effect " + iconState}/>
                </div>
            </div>

            <div ref={menuRef} className={"class_header_menu " + "class_menu_responsive " + menuClass }>
                <div className="class_header_title_container">
                    <a href={process.env.PUBLIC_URL}><ImagenMenu /></a>
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
                <li><a ref={menuResponsiveItemInicio} href={process.env.PUBLIC_URL}>Inicio</a></li>
                    <li><a ref={menuResponsiveItemProductos} href={process.env.PUBLIC_URL + "/#/productos"}>Nuestros productos</a></li>
                    <li><a ref={menuResponsiveItemProyecto} href={process.env.PUBLIC_URL + "/#/proyecto"}>Acerca del proyecto</a></li>
                </ul>
            </div>
        </>
    );
}

export default Menu; 