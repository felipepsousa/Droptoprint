import React from 'react'
import './style.css'

function Products( {products}) {
    console.log(products)
    return (
        products.map((product) => (
            <div className="container-products" key={product.title} id={product.title}>
            <section className="products">
                <img src={require("..\/..\/..\/assets\/images\/Home-img\/" + product.img + ".png")} />
                <span className="title-products">{product.title}</span>
            </section>
            <section className="informations-button">
                <span>{product.description}</span>
                <button>Escolher</button>
            </section>
        </div>
            ))
    )
}

export default Products
