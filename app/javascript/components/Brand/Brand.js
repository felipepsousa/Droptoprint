import React from 'react'
import './style.css'
import imgPencil from '../../../assets/images/pencil.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Brand() {
    return (
        <div className="container-brand">
            <section className="container-carousel">
                <span className="carousel-title">Escolhido por milhares de designers, indústrias e marcas</span>
            </section>
            <div className="container-your-brand">
                <section className="your-brand">
                    <span>Sua marca esta preparada para o momento da venda?</span>
                    <span>Você sabia que a construção do design de seu produto faz toda a diferença na hora da venda? Nossa equipe dispõe de serviços para ajudar os seus produtos a venderem mais.</span>
                </section>
                <section className="container-pencil">
                    <img src={imgPencil} alt=""/>
                    <AnchorLink href="#Design">Design Agora</AnchorLink>
                </section>
            </div>
        </div>
    )
}

export default Brand
