import "./Footer.css";

const Footer = () => {
    return(
        <div className="class_footer_container">
            <div className="class_footer_icon_container">
                <a href="https://www.facebook.com/cmoreno1234/" target="_blank"><i className="fab fa-facebook"/></a>
                <a href="https://www.linkedin.com/in/cristian-moreno-797b1b218/" target="_blank"><i className="fab fa-linkedin"/></a>
                <a href="https://wa.me/+5493874450711" target="_blank"><i className="fab fa-whatsapp"/></a>
                <a href="https://github.com/cscristianmoreno" target="_blank"><i className="fab fa-github"/></a>
            </div>
        </div>
    );
}

export default Footer;