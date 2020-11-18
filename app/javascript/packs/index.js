import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import './style.css'

import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Footer from '../components/Footer/Footer'
import PageConstruction from '../components/PageConstruction/PageConstruction'
import LoginRegister from '../components/LoginRegister/LoginRegister'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
        <Header />
        <HashRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/page_construction" component={PageConstruction} exact/>
            <Route path="/login_register" component={LoginRegister} exact/>
          </Switch>
        </HashRouter>
        <Footer />
    </div>,
    document.body.appendChild(document.createElement('div')),
  )
})
