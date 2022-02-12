import { useContext } from "react";
import TestContext from "./TestContext.js";

const nuevaData = {
    nombre: "Juan",
    apellido: "Puertas",
    edad: 31,
    pais: "Argentina"
}

const CambiarData = () => {

    const { setState } = useContext(TestContext);

    return(
        <button onClick={() => setState(nuevaData)} className="btn btn-primary">Cambiar información</button>
    );
}

export default CambiarData;