import "./Project.css";
import imagen_html from "./images/html.svg";
import imagen_react from "./images/react.svg";
import imagen_css from "./images/css.svg";
import imagen_javascript from "./images/javascript.svg";
import imagen_boostrap from "./images/boostrap.svg";

const Project = () => {
    return(
        <div className="class_project_container class_announcement_container">
            <div className="class_announcement">
                <div className="class_announcement_description">
                    <span className="class_announcement_title">
                        Acerca de este proyecto
                    </span>

                    <span className="class_announcement_text_body">
                        E-Commerce es una simulación ficticia de un comercio electrónico basado en la venta
                        de productos a través de Internet. Este proyecto se realizó con el fin de superar y aumentar las capacidades
                        personales en cuanto a conocimientos respecta.  
                    </span>
                </div>

                <div className="class_project_technology_container">
                    <span className="class_project_technology_title">TECNOLOGÍAS UTILIZADAS</span>

                    <div className="class_offer_icon_container">
                        <div className="class_offer_icon">
                            <img src={imagen_react} className="class_offer_image"/>
                            <span className="class_offer_icon_description_title">REACT</span>
                        </div>

                        <div className="class_offer_icon">
                            <img src={imagen_html} className="class_offer_image"/>
                            <span className="class_offer_icon_description_title">HTML</span>
                        </div>

                        <div className="class_offer_icon">
                            <img src={imagen_css} className="class_offer_image"/>
                            <span className="class_offer_icon_description_title">CSS</span>
                        </div>

                        <div className="class_offer_icon">
                            <img src={imagen_javascript} className="class_offer_image"/>
                            <span className="class_offer_icon_description_title">JAVASCRIPT</span>
                        </div>

                        <div className="class_offer_icon">
                            <img src={imagen_boostrap} className="class_offer_image"/>
                            <span className="class_offer_icon_description_title">BOOSTRAP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;