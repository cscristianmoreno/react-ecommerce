import "./Offer.css";

import imagen_comodidad from "./images/comodidad.svg";
import imagen_alcance from "./images/alcance.svg";
import imagen_costos_reducidos from "./images/costos_reducidos.svg";
import imagen_atencion from "./images/atencion.svg";
import imagen_acepta_pagos from "./images/acepta_pagos.svg";
import imagen_descuentos from "./images/descuentos.svg";

const Offer = () => {
    return(
        <div className="class_offer_container">
            <span className="class_offer_title">¡Tu compra, ahora a tu alcance!</span>
            <span className="class_offer_subtitle">
                Beneficios de comprar por E-Commerce
            </span>

            <div className="class_offer_icon_container">
                <div className="class_offer_icon">
                    <img src={imagen_comodidad} className="class_offer_image"/>

                    <div className="class_offer_icon_description_container">
                        <span className="class_offer_icon_description_title">COMODIDAD</span>
                        <span className="class_offer_icon_description_subtitle">Compra desde la comodidad de tu hogar, y disfruta de productos imperdibles</span>
                    </div>
                </div>

                <div className="class_offer_icon">
                    <img src={imagen_alcance} className="class_offer_image"/>

                    <div className="class_offer_icon_description_container">
                        <span className="class_offer_icon_description_title">ALCANCE</span>
                        <span className="class_offer_icon_description_subtitle">Los vendedores que venden a través de E-Commerce, tienen un mayor alcance de sus productos</span>
                    </div>
                </div>

                <div className="class_offer_icon">
                    <img src={imagen_costos_reducidos} className="class_offer_image"/>

                    <div className="class_offer_icon_description_container">
                        <span className="class_offer_icon_description_title">COSTOS REDUCIDOS</span>
                        <span className="class_offer_icon_description_subtitle">Los compradores de E-Commerce ahorran más dinero y están más satisfechos</span>
                    </div>
                </div>

                <div className="class_offer_icon">
                    <img src={imagen_atencion} className="class_offer_image"/>

                    <div className="class_offer_icon_description_container">
                        <span className="class_offer_icon_description_title">ATENCIÓN 24/7</span>
                        <span className="class_offer_icon_description_subtitle">Busca el producto que tanto deseas a la hora que quieras, tan solo con un click</span>
                    </div>
                </div>

                <div className="class_offer_icon">
                    <img src={imagen_acepta_pagos} className="class_offer_image"/>

                    <div className="class_offer_icon_description_container">
                        <span className="class_offer_icon_description_title">MÉTODOS DE PAGO</span>
                        <span className="class_offer_icon_description_subtitle">Podrás acceder a la compra de tus productos a través de cualquier método de pago</span>
                    </div>
                </div>

                <div className="class_offer_icon">
                    <img src={imagen_descuentos} className="class_offer_image"/>

                    <div className="class_offer_icon_description_container">
                        <span className="class_offer_icon_description_title">DESCUENTOS</span>
                        <span className="class_offer_icon_description_subtitle">Podrás beneficiarte de descuentos imperdibles cada semana para tus productos</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offer;