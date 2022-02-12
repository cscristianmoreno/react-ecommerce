import React, { createContext, useState } from "react";

const myData = {
    nombre: "Cristian",
    apellido: "Moreno",
    edad: 25,
    pais: "Argentina"
}

const TestContext = createContext();

export const DataProvider = ({ children }) => {
    const [state, setState] = useState(myData);

    return (
        <TestContext.Provider value={{state, setState}}>
            {children}
        </TestContext.Provider>
    );
}

export default TestContext;