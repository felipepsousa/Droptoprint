import React from 'react'
import './style.css'

function LoginRegister() {
    return (
        <div className="container-login-register">
            <div className="container-login">
                <span className="login-register-title">Login</span>
                <input type="text" id="email" placeholder="E-mail"/>
                <input type="text"id="password" placeholder="Senha"/>
                <button>Entrar</button>
            </div>
            <div className="container-register">
                <span className="login-register-title">Cadastre-se</span>
                <input type="text" id="name" placeholder="Nome"/>
                <input type="text"id="email"  placeholder="E-mail"/>
                <input type="text"id="password"  placeholder="Senha"/>
                <input type="text"id="confirm-password"  placeholder="Confirma Senha"/>
                <button>Cadastrar-se</button>
            </div>
        </div>
    )
}

export default LoginRegister
