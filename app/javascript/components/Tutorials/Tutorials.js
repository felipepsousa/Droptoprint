import React from 'react'
import './style.css'
import tutor1 from '../../../assets/images/tutorial1.png'
import tutor2 from '../../../assets/images/tutorial2.png'
import tutor3 from '../../../assets/images/tutorial3.png'
import tutor4 from '../../../assets/images/tutorial4.png'

function Tutorials() {
    return (
        <div className="container-tutorials">
            <div className="corousel"></div>
            <div className="toturials">
                <section className="container-toturials-title">
                    <span className="toturials-title">Tutoriais</span>
                </section>                
                <div className="conteiner-sections">
                <section className="tutorials-section">
                    <section>
                        <section className='tutorials-design'>Design</section >
                        <img src={tutor1} alt="Tutorial 1"/>
                    </section>
                    <section className="tutorials-banner">
                        <span>Vídeo</span>
                        <span>Como fazer ilustração no Photoshop</span> 
                    </section>
                </section>
                <section className="tutorials-section">
                    <section className="">
                        <section className='tutorials-design'>Design</section >
                        <img src={tutor2} alt="Tutorial 1"/>
                    </section>
                    <section className="tutorials-banner">
                        <span>Blog</span>
                        <span>Desenhando com linhas retas</span> 
                    </section>
                </section>
                <section className="tutorials-section">
                    <section className="">
                        <section className='tutorials-design'>Ilustração</section >
                        <img src={tutor3} alt="Tutorial 1"/>
                    </section>
                    <section className="tutorials-banner">
                        <span>Tutorial</span>
                        <span>Colorindo sua imagem para seu produto</span> 
                    </section>
                </section>
                <section className="tutorials-section">
                    <section className="">
                        <section className='tutorials-design'>Ensino</section >
                        <img src={tutor4} alt="Tutorial 1"/>
                    </section>
                    <section className="tutorials-banner">
                        <span>Tutorial</span>
                        <span>Como fazer sangria e marcas de corte</span> 
                    </section>
                </section>
                </div>
                
            </div>
        </div>
    )
}

export default Tutorials
