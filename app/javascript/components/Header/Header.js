import React from 'react'
import "./style.css"
import imgLogo from "../../../assets/images/logo.svg"
import{ BrowserRouter, Route, Link, NavLink, HashRouter } from 'react-router-dom'

function Header() {
    return (
        <HashRouter>
        <div className="container-header">
            <div className="container-header-items">
            <section className="logo-header"><NavLink to="/"><img src={imgLogo} alt="Logo"/></NavLink></section>
            <section className="menu-header">                
                <span className="menu-header-option"><NavLink to="/page_construction">Suporte</NavLink></span>
                <span className="menu-header-option"><NavLink to="/login_register">Pedidos</NavLink></span>
                <span className="menu-header-option"><NavLink to="/page_construction">Carrinho</NavLink></span>
            </section>
            <section className="user-header">
                <span className="menu-header-option"><NavLink to="/login_register">Login</NavLink></span>
            </section>
            </div>
        </div>
        </HashRouter>
    )
}

export default Header
