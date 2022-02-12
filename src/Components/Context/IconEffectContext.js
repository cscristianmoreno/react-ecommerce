import React, { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";

const IconEffectContext = createContext();
const cookies = new Cookies();

export const IconProvider = ({children}) => {
    const [iconState, setIconState] = useState("");
    const [count, setCount] = useState(0);

    const [shopState, setShopState] = useState({
        id: [],
        name: [],
        image: [],
        price: [],
        date: []
    });

    if (typeof cookies.get("products_name") !== "undefined") {
        shopState.id = cookies.get("products_id");
        shopState.name = cookies.get("products_name");
        shopState.image = cookies.get("products_image");
        shopState.price = cookies.get("products_price");
        shopState.date = cookies.get("products_date");
    }

    return(
        <>
            <IconEffectContext.Provider value={{iconState, setIconState, shopState, setShopState, count, setCount }}>
                {children}
            </IconEffectContext.Provider>
        </>
    );
}

export default IconEffectContext;