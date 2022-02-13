import "./Offer.css";

import Comodidad from "./images/Comodidad.js";
import Alcance from "./images/Alcance.js";
import CostosReducidos from "./images/CostosReducidos.js";
import Atencion from "./images/Atencion.js";
import MetodosDePago from "./images/MetodosDePago.js";
import Descuentos from "./images/Descuentos.js";

const Offer = () => {
    return(
        <div className="class_offer_container">
            <span className="class_offer_title">¡Tu compra, ahora a tu alcance!</span>
            <span className="class_offer_subtitle">
                Beneficios de comprar por E-Commerce
            </span>

            <div className="class_offer_icon_container">
                <div className="class_offer_icon">
                    <Comodidad/>

                    <div className="class_offer_icon_description_container">
                        <span className="class_offer_icon_description_title">COMODIDAD</span>
                        <span className="class_offer_icon_description_subtitle">Compra desde la comodidad de tu hogar, y disfruta de productos imperdibles</span>
                    </div>
                </div>

                <div className="class_offer_icon">
                    <Alcance/>

                    <div className="class_offer_icon_description_container">
                        <span className="class_offer_icon_description_title">ALCANCE</span>
                        <span className="class_offer_icon_description_subtitle">Los vendedores que venden a través de E-Commerce, tienen un mayor alcance de sus productos</span>
                    </div>
                </div>

                <div className="class_offer_icon">
                    <CostosReducidos/>
                    <div className="class_offer_icon_description_container">
                        <span className="class_offer_icon_description_title">COSTOS REDUCIDOS</span>
                        <span className="class_offer_icon_description_subtitle">Los compradores de E-Commerce ahorran más dinero y están más satisfechos</span>
                    </div>
                </div>

                <div className="class_offer_icon">
                    <Atencion/>

                    <div className="class_offer_icon_description_container">
                        <span className="class_offer_icon_description_title">ATENCIÓN 24/7</span>
                        <span className="class_offer_icon_description_subtitle">Busca el producto que tanto deseas a la hora que quieras, tan solo con un click</span>
                    </div>
                </div>

                <div className="class_offer_icon">
                    <MetodosDePago/>

                    <div className="class_offer_icon_description_container">
                        <span className="class_offer_icon_description_title">MÉTODOS DE PAGO</span>
                        <span className="class_offer_icon_description_subtitle">Podrás acceder a la compra de tus productos a través de cualquier método de pago</span>
                    </div>
                </div>

                <div className="class_offer_icon">
                    <Descuentos/>

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