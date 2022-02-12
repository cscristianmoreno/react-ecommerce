import { useContext, useEffect } from "react";
import "./ShoppingCart.css"
import Cookies from "universal-cookie";
import IconEffectContext from "../Context/IconEffectContext";

import Table from 'react-bootstrap/Table'

import imagen_fantasma from "./images/fantasma.svg";

const cookies = new Cookies();

const ShoppingCart = () => {
    const { shopState, setShopState, count, setCount, setIconState } = useContext(IconEffectContext);

    const total_payment = () => {
        if (shopState.name.length === 0) {
            return "0";
        }

        const price = shopState.price.reduce((operator, num) => operator + num);
        // const price = 0;
        return new Intl.NumberFormat("de-DE", {style: "currency", currency: "USD"}).format(price);
    }

    const deleteItem = (ev) => {
        
        const newArray = {
            date: [],
            price: [],
            image: [],
            name: [],
            id: []
        };


        newArray.date = shopState.date.filter((str, index) => index !== ev);
        newArray.price = shopState.price.filter((str, index) => index !== ev);
        newArray.image = shopState.image.filter((str, index) => index !== ev);
        newArray.name = shopState.name.filter((str, index) => index !== ev);
        newArray.id = shopState.id.filter((str, index) => index !== ev);

        cookies.set("products_id", newArray.id, { path: "/" });
        cookies.set("products_name", newArray.name, { path: "/" } );
        cookies.set("products_image", newArray.image, { path: "/" } );
        cookies.set("products_price", newArray.price, { path: "/" } );
        cookies.set("products_date", newArray.date, { path: "/" } );

        if (newArray.name.length === 0) {
            clearCart();
        }
        
        setShopState(newArray);
    }

    const items = (id, image, name, date, price) => {
        return (
             <div className="class_item">
                <img src={require(`../Products/${image.replace("./", "")}`)}/>
                <span>{name}</span>
                
                <span>1</span>
                <span style={{color: "red"}}>{new Intl.NumberFormat("de-DE", {style: "currency", currency: "USD"}).format(price)}</span>
                <span>{new Date(date).toLocaleString()}</span>
                <span>
                    <button onClick={(ev) => deleteItem(id)} className="btn btn-danger">Eliminar</button>
                </span>
            </div>
        )
    }

    const clearCart = () => {
        cookies.set("products_id", [], { path: "/" });
        cookies.set("products_name", [], { path: "/" } );
        cookies.set("products_image", [], { path: "/" } );
        cookies.set("products_price", [], { path: "/" } );
        cookies.set("products_date", [], { path: "/" } );
        
        setShopState([]);
        setIconState("");
    }

    return(
        <div className="class_shopping_cart_container">
            <span className="class_shopping_title">
                MIS COMPRAS
            </span>

            <div className="class_shopping_items_container">
                <Table responsive="xl">
                    <thead>
                        <tr>
                            <td>PRODUCTO</td>
                            <td>NOMBRE</td>
                            <td>CANTIDAD</td>
                            <td>PRECIO</td>
                            <td>FECHA</td>
                            <td>ACCIÓN</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        shopState.name.map((str, index) => {
                            return(
                                <tr>
                                    <td><img style={{width: "100px"}} src={require(`../Products/${shopState.image[index].replace("./", "")}`)}/></td>
                                    <td>{shopState.name[index]}</td>
                                    <td>1</td>
                                    <td style={{color: "red"}}>{new Intl.NumberFormat("de-DE", {style: "currency", currency: "USD"}).format(shopState.price[index])}</td>
                                    <td>{shopState.date[index]}</td>
                                    <td><button onClick={(ev) => deleteItem(index)} className="btn btn-danger">Eliminar</button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>

            <div className="class_items_action_container">
                <div className="class_items_button_container">
                    <button className="btn btn-primary">Comprar</button>
                    <button onClick={() => clearCart()} className="btn btn-danger">Vaciar carro</button>
                </div>
            </div>

            <div className="class_item_total_pay_container">
                <div className="class_item_total_pay">
                    <span>Productos en total</span>
                    <span>{shopState.name.length}</span>
                </div>

                <br/>

                <div className="class_item_total_pay">
                    <span>Total a pagar</span>
                    <span style={{color: "#047dc4"}}>{total_payment()}</span>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;