import React from 'react'
import './style.css'
import imgEdit from '../../../assets/images/edit-orange.svg'
import imgShop from '../../../assets/images/shop-green.svg'
import imgSearch from '../../../assets/images/search-blue.svg'

function HowUse() {
    return (
        <div className="container-how-use">
            <span className="title-how-use">Como funciona?</span>
        <section className="steps-how-use">
        <div className="step-how-use">
                    <img src={imgSearch} alt=""/>
                    <div className="step-bottom">
                        <span className="step-number">1</span>
                        <section className="container-title-text">
                            <span className="step-title">Escolha seu serviço</span>
                            <span className="step-text">Aqui você fará a escolha do serviço que deseja.</span>
                        </section>
                    </div>
            </div>
            <div className="step-how-use">
                    <img src={imgEdit} alt=""/>
                    <div className="step-bottom">
                        <span className="step-number">2</span>
                        <section className="container-title-text">
                            <span className="step-title">Personalize seu serviço</span>
                            <span className="step-text">Aqui você personalizará o serviço que deseja. Responda as perguntas que o site trará para receber seu orçamento em tempo real.</span>
                        </section>
                    </div>
            </div>
            <div className="step-how-use">
                    <img src={imgShop} alt=""/>
                    <div className="step-bottom">
                        <span className="step-number">3</span>
                        <section className="container-title-text">
                            <span className="step-title">Faça seu pedido</span>
                            <span className="step-text">Após preenchido o site já lhe trará a previsão de entrega do serviço e a opção de pagamento tudo online.</span>
                        </section>
                    </div>
            </div>
        </section>
        </div>
    )
}

export default HowUse
