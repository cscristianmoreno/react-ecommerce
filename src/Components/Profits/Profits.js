import "./Profits.css";
import imagen_celular from "./images/imagen_celular.jpg"; 
import imagen_hombre from "./images/imagen_hombre.jpg"; 
import imagen_personas from "./images/imagen_personas.svg"; 

const Profits = () => {
    return(
        <div className="class_profits_container">
            

            <div className="class_profits class_profits_normal">
                <div className="class_profits_title_container">
                    <span className="class_profits_title">¡SOBRE NOSOTROS!</span>

                    <span className="class_profits_text">
                        Somos un local con un rubro relacionado a la compra y venta de productos, estamos ubicados en Av. San Martín, Salta (AR). Dentro del mismo
                        podrás acceder a diferentes variedad de inumerables beneficios que ofrecemos, entre ellos se encuentran. 
                    </span>

                    <div className="class_profits_icons_container">
                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>EXCELENTE ATENCIÓN</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>PRODUCTOS DE CALIDAD</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>DESCUENTOS IMPERDIBLES</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>PERSONAL CAPACITADO</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>PRECIOS ACCESIBLES</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>DEVOLUCIONES</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>PAGOS DE HASTA 12 CUOTAS</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>LIBRO DE QUEJAS</span>
                        </div>
                    </div>
                </div>
                
                 <img src={imagen_personas} className="class_profits_image"/>
            </div>

            <div className="class_profits class_profits_responsive">
                <div className="class_profits_title_container">
                    <span className="class_profits_title">¡SOBRE NOSOTROS!</span>

                    <span className="class_profits_text">
                        Somos un local con un rubro relacionado a la compra y venta de productos, estamos ubicados en Av. San Martín, Salta (AR). Dentro del mismo
                        podrás acceder a diferentes variedad de inumerables beneficios que ofrecemos, entre ellos se encuentran. 
                    </span>

                    <img src={imagen_personas} className="class_profits_image"/>

                    <div className="class_profits_icons_container">
                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>EXCELENTE ATENCIÓN</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>PRODUCTOS DE CALIDAD</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>DESCUENTOS IMPERDIBLES</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>PERSONAL CAPACITADO</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>PRECIOS ACCESIBLES</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>DEVOLUCIONES</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>PAGOS DE HASTA 12 CUOTAS</span>
                        </div>

                        <div className="class_profits_icon">
                            <i className="fas fa-check"></i>
                            <span>LIBRO DE QUEJAS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profits;