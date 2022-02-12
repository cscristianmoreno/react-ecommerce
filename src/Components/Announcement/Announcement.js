import "./Announcement.css";

import image_announcement_svg from "./images/imagen_anuncio.svg";

const Announcement = () => {
    return (
        <div className="class_announcement_container">
            <div className="class_announcement">
                <div className="class_announcement_description">
                    <span className="class_announcement_title">
                        ¡Fácil, Rápido y Preciso!
                    </span>

                    <span className="class_announcement_subtitle">¡E-commerce, ahora todo es más sencillo!</span>

                    <span className="class_announcement_text_body">
                        Desde hace tiempo, la compra de productos, algo esencial en nosotros,
                        se convirtió en un problema tanto para compradores como para vendedores, varios factores jugaban en contra de ambos. 
                        Distancia, clima, y otras características, determinaban el día a día del comprador como del vendedor. Hoy en día, gracias a la tecnología
                        y a su avance, el comercio se volvió más accesible y más práctico, convirtiéndose en un gran impacto a nivel mundial. 
                        La mayor parte del comercio electrónico consiste 
                        en la compra y venta de productos o servicios entre personas y empresas.
                    </span>
                </div>

                <div className="class_announcement_image_container">
                    <img src={image_announcement_svg} className="class_img_announcement"/>
                </div>
            </div>
        </div>
    );
}

export default Announcement;