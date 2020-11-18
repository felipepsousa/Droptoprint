import React, {Component, Link } from 'react'
import Products from '../Products/Products'
import HowUse from '../HowUse/HowUse'
import Brand from '../Brand/Brand'
import Tutorials from '../Tutorials/Tutorials'

function Home() {
    
    //Simulação de uma resposta de API
    const [products, setProducts] = React.useState([ 
        {title: 'Rótulos & Etiquetas', description: 'Configuração de rótulos e etiquetas para todo o tipo de segmento.', img: "rotulo"},
        {title: 'Adesivos', description: 'Configuração de adesivos para lojas, produtos, festas e demais.', img: "adesivo"},
        {title: 'Design', description: 'Design para todo tipo de segmento de embalagem.', img: "design"},
        {title: 'Mockup', description: 'Mockup reais de produtos simulando a impressão final com fidelidade.', img: "mockup"},
    ])
    return (
        <>
            <Products products={products}/>
            <HowUse />
            <Brand />
            <Tutorials />
        </>
    );
}

export default Home;