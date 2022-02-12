import Header from "./Components/Header/Header.js";
import Body from "./Components/Body/Body.js";
import Menu from "./Components/Menu/Menu.js";
import Products from "./Components/Products/Products.js";
import Footer from "./Components/Footer/Footer.js";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart.js";
import Project from "./Components/Project/Project.js";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import { IconProvider } from "./Components/Context/IconEffectContext.js";

const App = () => {
    return(
        <div className="class_main_container">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/productos" element={<Productos/>}/>
                    <Route path="/compras" element={<Compras/>}/>
                    <Route path="/proyecto" element={<Proyecto/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

const Inicio = () => {
    return(
        <IconProvider>
            <Menu/>
            <Header/>
            <Body/>
        </IconProvider>
    );
}

const Productos = () => {
    return(
        <IconProvider>
            <Menu/>
            <Header/>
            <Products/>
            <Footer/>
        </IconProvider>
    );
}

const Compras = () => {
    return(
        <IconProvider>
            <Menu/>
            <Header/>
            <ShoppingCart/>
            <Footer/>
        </IconProvider>
    );
}

const Proyecto = () => {
    return(
        <IconProvider>
            <Menu/>
            <Header/>
            <Project/>
            <Footer/>
        </IconProvider>
    );
}

export default App;