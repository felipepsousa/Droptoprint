import React from 'react'
import './style.css'
import imgLogo from '../../../assets/images/logo-escuro.svg'
import imgGoogle from '../../../assets/images/google.png'
import imgCard from '../../../assets/images/card.svg'

function Footer() {
    return (
        <div className="container-footer">
            <section className="container-links">
                <ul className="links-footer">
                    <li><a href="">Contato</a></li>
                    <li><a href="">Tutoriais</a></li>
                    <li><a href="">Trabalhe Conosco</a></li>
                    <li><a href="">Gabaritos</a></li>
                </ul>
                <img src={imgLogo} alt="Logo"/>
                <ul className="links-footer">
                    <li><a href="">Termos de Uso</a></li>
                    <li><a href="">Política de Privacidade</a></li>
                    <li><a href="">Acesso ao Sistema</a></li>
                    <li><a href="">Quem já Comprou</a></li>
                </ul>
            </section>
            <section className="container-card">
                <img src={imgGoogle} alt="Google"/>
                <img src={imgCard} alt="Google"/>
            </section>
        </div>
    )
}

export default Footer
