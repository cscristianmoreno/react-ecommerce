import { React, useContext, useEffect, useRef, useState } from "react"
import Cookies from "universal-cookie";
import "./Products.css";
import IconEffectContext from "../Context/IconEffectContext.js";

const cookies = new Cookies();

const items = [
    { name: "Xiamo Redmi 9A", image: "./images/celulares/xiamo_redmi_9A.jpg", price: 2500, category: "celular" },
    { name: "Moto E20", image: "./images/celulares/moto_e20.jpg", price: 2500, category: "celular" },
    { name: "Moto G60", image: "./images/celulares/moto_g60.jpg", price: 13240, category: "celular" },
    { name: "Nokia 106", image: "./images/celulares/nokia_106.jpg", price: 6132, category: "celular" },
    { name: "Quantum UP32", image: "./images/celulares/quantum_up32.jpg", price: 18203, category: "celular" },
    { name: "Samsung Galaxy A22", image: "./images/celulares/samsung_galaxy_a22.jpg", price: 32102, category: "celular" },
    { name: "Samsung Galaxy A72", image: "./images/celulares/samsung_galaxy_a72.jpg", price: 45000, category: "celular" },
    { name: "Samsung Galaxy S20", image: "./images/celulares/samsung_galaxy_s20.jpg", price: 27000, category: "celular" },
    { name: "TCL 20 SE", image: "./images/celulares/tcl_20_se.jpg", price: 18000, category: "celular" },
    { name: "Moto E7i Power 32", image: "./images/celulares/moto_e7i_power.jpg", price: 54000, category: "celular" },
    { name: "Alcatel 1L Open", image: "./images/celulares/alcatel_1l_open.jpg", price: 30000, category: "celular" },
    { name: "Dooge S96 Pro Dual", image: "./images/celulares/dooge_s96_pro_dual.jpg", price: 110000, category: "celular" },
    { name: "Kodak Smartway M2 Dual", image: "./images/celulares/kodak_smartway_m2_dual.jpg", price: 92500, category: "celular" },
    { name: "ZTE Blade V30", image: "./images/celulares/zte_blade_v30.jpg", price: 27000, category: "celular" },
    { name: "Samsung Galaxy Z Flip 3", image: "./images/celulares/samsung_galaxy_z_flip3.jpg", price: 42500, category: "celular" },

    { name: "Chomba Pampero", image: "./images/remeras/chomba_pampero_tilcara_blanca.jpg", price: 1750, category: "remera" },
    { name: "Remera Básica Verde", image: "./images/remeras/remera_basica_verde.jpg", price: 1400, category: "remera" },
    { name: "Remera Térmica", image: "./images/remeras/remera_termica.jpg", price: 1750, category: "remera" },
    { name: "Remera Uchiha", image: "./images/remeras/remera_uchiha.jpg", price: 900, category: "remera" },
    { name: "Remera Adultos Dobby", image: "./images/remeras/remera_adultos_dobby.jpg", price: 1300, category: "remera" },
    { name: "Remera Central Perk", image: "./images/remeras/remera_central_perk.jpg", price: 1450, category: "remera" },
    { name: "Remera Malfoy 07", image: "./images/remeras/remera_malfoy_07.jpg", price: 1650, category: "remera" },
    { name: "Remera Pixar", image: "./images/remeras/remera_pixar.jpg", price: 1325, category: "remera" },
    { name: "Remera r4_60_aniversario", image: "./images/remeras/remera_r4_60_aniversario.jpg", price: 1050, category: "remera" },
    { name: "Remera Slazeng", image: "./images/remeras/remera_slazenger.jpg", price: 2350, category: "remera" },
    { name: "Remera Camiseta Deportiva", image: "./images/remeras/remera_camiseta_deportiva.jpg", price: 1450, category: "remera" },
    { name: "Remera Camiseta Deportiva", image: "./images/remeras/remera_camiseta_deportiva_hombre.jpg", price: 1850, category: "remera" },
    { name: "Remera Oversize Manga Corta", image: "./images/remeras/remera_oversize_manga_corta.jpg", price: 1150, category: "remera" },
    { name: "Remerones De Personajes", image: "./images/remeras/remerones_de_personajes.jpg", price: 1750, category: "remera" },
    { name: "Pack x3 Remeras Básicas", image: "./images/remeras/pack_x3_remeras_basicas.jpg", price: 4490, category: "remera" },

    { name: "Apple Watch Series 3", image: "./images/relojes/apple_watch_series_3.jpg", price: 7500, category: "reloj" },
    { name: "Reloj De Cuero Marrón", image: "./images/relojes/reloj_de_cuero_marron.jpg", price: 13500, category: "reloj" },
    { name: "Reloj Hombre Skmei 1251", image: "./images/relojes/reloj_hombre_skmei_1251.jpg", price: 18000, category: "reloj" },
    { name: "Reloj Mujer Aiwa Sumergible", image: "./images/relojes/reloj_mujer_aiwa_sumergible.jpg", price: 5500, category: "reloj" },
    { name: "Reloj Negro Metálico", image: "./images/relojes/reloj_negro_metalico.jpg", price: 4500, category: "reloj" },
    { name: "Reloj Pulsera Hombres", image: "./images/relojes/reloj_pulsera_hombres.jpg", price: 3250, category: "reloj" },
    { name: "Reloj Pulsera Malla Silicona", image: "./images/relojes/reloj_pulsera_malla_silicona.jpg", price: 6250, category: "reloj" },
    { name: "Reloj Táctico Militar", image: "./images/relojes/reloj_tactico_militar.jpg", price: 13000, category: "reloj" },
    { name: "Samsung Galaxy Watch 4", image: "./images/relojes/samsung_galaxy_watch_4.jpg", price: 23000, category: "reloj" },
    { name: "Smartwatch Haylou Smart", image: "./images/relojes/smartwatch_haylou_smart.jpg", price: 35000, category: "reloj" },
    { name: "Samsung Galaxy Fit 2 Bluetooh", image: "./images/relojes/samsung_galaxy_fit2_bluetooth.jpg", price: 38999, category: "reloj" },
    { name: "Samsung Galaxy Watch Bluetooh", image: "./images/relojes/samsung_galaxy_watch_bluetooth.jpg", price: 6000, category: "reloj" },
    { name: "Smartwatch Microwear", image: "./images/relojes/smartwatch_microwear.jpg", price: 4230, category: "reloj" },
    { name: "Smartwatch Colmi P8", image: "./images/relojes/smartwatch_colmi_p8.jpg", price: 5400, category: "reloj" },
    { name: "Reloj Led Touch Pulsera", image: "./images/relojes/reloj_led_touch_pulsera_silicona.jpg", price: 549, category: "reloj" },

    { name: "Bermuda De Algodón Para Hombre", image: "./images/pantalones/bermuda_hombre_algodon.jpg", price: 1250, category: "pantalon" },
    { name: "Jean Chupin Celeste", image: "./images/pantalones/jean_chupin_celeste_hombre.jpg", price: 2500, category: "pantalon" },
    { name: "Joggins Deportivo Para Hombre", image: "./images/pantalones/joggins_hombre_deportivo.jpg", price: 4000, category: "pantalon" },
    { name: "Pantalón Chino De Hombre", image: "./images/pantalones/pantalon_chino_hombre.jpg", price: 3250, category: "pantalon" },
    { name: "Pantalón Chupin Elastizado", image: "./images/pantalones/pantalon_chupin_elastizado.jpg", price: 2250, category: "pantalon" },
    { name: "Pantalón Corto Short", image: "./images/pantalones/pantalon_corto_short.jpg", price: 3750, category: "pantalon" },
    { name: "Pantalón Jogger Elastizado", image: "./images/pantalones/pantalon_jogger_elastizado.jpg", price: 4500, category: "pantalon" },
    { name: "Pantalón Pampero Clásico", image: "./images/pantalones/pantalon_pampero_clasico.jpg", price: 5100, category: "pantalon" },
    { name: "Pantalón Recto Para Hombre", image: "./images/pantalones/pantalon_recto_hombre.jpg", price: 2800, category: "pantalon" },
    { name: "Short Cargo Bermudas", image: "./images/pantalones/shorts_cargo_bermuda_hombre.jpg", price: 4750, category: "pantalon" },
    { name: "Joggins Hombre Chupin Deportivo", image: "./images/pantalones/joggins_hombre_chupin_deportivo.jpg", price: 3250, category: "pantalon" },
    { name: "Pantalón Slim Elastizado", image: "./images/pantalones/pantalon_slim_elastizado.jpg", price: 5430, category: "pantalon" },
    { name: "Pantalón Hombre Gabardina", image: "./images/pantalones/pantalon_hombre_gabardina.jpg", price: 2350, category: "pantalon" },
    { name: "Pantalón Independiente Negro Cai", image: "./images/pantalones/pantalon_independiente_negro_cai.jpg", price: 3275, category: "pantalon" },
    { name: "Pantalón Mujer Mom Pinzado", image: "./images/pantalones/pantalon_mujer_mom_pinzado.jpg", price: 3500, category: "pantalon" },
]

const Products = () => {

    const [category, setCategory] = useState(items);
    const [search, setSearch] = useState(false);
    const [auxCategory, setAuxCategory] = useState(items);
    const [order, setOrder] = useState([]);

    const buttonRefs = useRef([]);

    const { iconState, setIconState, setShopState, shopState } = useContext(IconEffectContext);

    useEffect(() => {
        if (typeof cookies.get("products_name") === "undefined") {
            return;
        }

        category.forEach((str, index) => {
            if (cookies.get("products_name").includes(str.name) === true) {
                buttonRefs.current[index].setAttribute("disabled", true);
                buttonRefs.current[index].classList.add("class_button_product_display");
                buttonRefs.current[index].textContext = "Añadido";
            }
            else {
                buttonRefs.current[index].removeAttribute("disabled", true);
                buttonRefs.current[index].classList.remove("class_button_product_display");
            }
        })
    }, [category]);

    const addRefs = (ev) => {
        if (ev && !buttonRefs.current.includes(ev)) {
            buttonRefs.current.push(ev);
        }
    }

    const handledFilter = (ev) => {
        const filter = items.filter((str) => str.category === ev);
        setOrder(filter);

        buttonRefs.current = [];

        if (search === false) {
            return;
        }

        return setCategory(filter);
    }

    const handledCheck = (ev) => {
        buttonRefs.current = [];
        setSearch(ev);

        if (ev === true) {
            if (order.length === 0) {
                const filter = items.filter((str) => str.category === "celular");

                setCategory(filter);
            }
            else {

                setCategory(order);
            }
        }
        else {
            setCategory(auxCategory);
        }
    }

    const handledMouseEnter = (ev) => {
        if (buttonRefs.current[ev].getAttribute("disabled") === "true") {
            return;
        }

        buttonRefs.current[ev].classList.add("class_button_product_display");
    }

    const handledMouseLeave = (ev) => {
        if (buttonRefs.current[ev].getAttribute("disabled") === "true") {
            return;
        }

        buttonRefs.current[ev].classList.remove("class_button_product_display");
    }
    
    const handledAddCart = (str, ev, index) => {
        // if (cookies.get("products_name").includes(str.name) === true) {
        //     return;
        // }

        setIconState("class_icon_effect_display");

        shopState.id.push(index);
        shopState.name.push(str.name);
        shopState.image.push(str.image);
        shopState.price.push(str.price);
        shopState.date.push(new Date().toLocaleString());

        cookies.set("products_id", shopState.id, { path: "/" });
        cookies.set("products_name", shopState.name, { path: "/" } );
        cookies.set("products_image", shopState.image, { path: "/" } );
        cookies.set("products_price", shopState.price, { path: "/" } );
        cookies.set("products_date", shopState.date, { path: "/" } );

        ev.target.innerHTML = "Añadido";
        ev.target.setAttribute("disabled", true);
    }

    return(
        <div className="class_products_main_container">
            <div className="class_products_title_container">
                <span className="class_products_title">Nuestros productos</span>
                <div className="class_products_search">
                    <input onClick={(ev) => handledCheck(ev.currentTarget.checked)} type="checkbox" className="form-check-input"/>

                    <span className="class_products_title">Ordenar por</span>

                    <select onChange={ev => handledFilter(ev.currentTarget.value)} className="form-select">
                        <option key="1" value="celular">Celulares</option>
                        <option key="2" value="pantalon">Pantalones</option>
                        <option key="3" value="reloj">Relojes</option>
                        <option key="4" value="remera">Remeras</option>
                    </select>
                </div>
            </div>

            <div className="class_products_products_container">
            {
                category.map((str, index) => 
                    <div key={index} onMouseEnter={(ev) => handledMouseEnter(index)} onMouseLeave={(ev) => handledMouseLeave(index)} className="class_products_product">
                        <div className="class_products_product_image_container">
                            <img src={require(`${str.image}`)}/>
                        </div>
                        <span>{str.name}</span>   
                        <span className="class_products_price">{new Intl.NumberFormat("de-DE", {style: "currency", currency: "USD"}).format(str.price)}</span>

                        <button ref={addRefs} onClick={(ev) => handledAddCart(str, ev, index)} className="class_button_product">Añadir</button> 
                    </div>
                )
            }
            </div>
        </div> 
    );
}

export default Products;