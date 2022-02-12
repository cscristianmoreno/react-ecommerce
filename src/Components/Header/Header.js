import "./Header.css";

import imagen_ecommerce from "./images/imagen_ecommerce.png";

const Header = () => {

    return(
        <>
            <div className="class_header_container">
                <div className="class_header_block"></div>

                <div className="class_header_text_container">
                    <div className="class_header_title">
                        Compra los mejores productos al mejor precio

                        <span className="class_header_subtitle">
                            Los mejores precios, los mejores productos, las mejores ofertas y mucho más, en un solo lugar!
                        </span>
                    </div>

                    <br/>

                    <div className="class_header_icon_container">
                        <a href="https://www.facebook.com/cmoreno1234/" target="_blank"><i className="fab fa-facebook"/></a>
                        <a href="https://www.linkedin.com/in/cristian-moreno-797b1b218/" target="_blank"><i className="fab fa-linkedin"/></a>
                        <a href="https://wa.me/+5493874450711" target="_blank"><i className="fab fa-whatsapp"/></a>
                        <a href="https://github.com/cscristianmoreno" target="_blank"><i className="fab fa-github"/></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;