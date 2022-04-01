import React, { useState } from "react";
import Breadcrumbs, {Crumb} from '../blocks/Breadcrumbs';
import {
    Outlet,
    Link
  } from "react-router-dom";
import Page from './Page';
import logo from '../../img/logo.svg';

export default function Main(props) {

    return  <Page>
                <header>
                    <ul className="menu">
                        <li className="item active"><Link to="/themes">Тематики</Link></li>
                        <li className="item"><Link to="/error">Пользователи</Link></li>
                        <li className="item"><Link to="login">Мой профиль</Link></li>
                    </ul>
                    <img src={logo} className="logo" alt="logo" />
                </header>
                <Breadcrumbs />
                
                <Outlet/>
                
                <footer>
                    <div className="logo-area">
                        <img src={logo} className="logo" alt="logo" />
                    </div>
                    <div className="description-area">
                        <h1>О проекте</h1>
                        <p>Данный сервис предоставляет возможность эффективного взаимодействия между сотрудниками и руководителями компании в сфере обмена идеями и предложениями.</p>
                        <p>Если вы владелец кампании и желаете с лёгкостью получить, лучшие идеи ваших сотрудников, то NekIdea - это то, что вы ищете.</p>
                        <p>Достаточно лишь зарегистрировать свою кампанию на нашем сервисе и добавить сотрудников, и перед вами откроются широкие возможности поиска единого решения.</p>
                    </div>
                    <div className="contacts-area">
                        <h1>Наши контакты</h1>
                        <ul className="links">
                            <li><a className="link" href="#"><i className="fas fa-at"></i>rodrom.da@mail.ru</a></li>
                            <li><a className="link" href="#"><i className="fab fa-github"></i>github.com/RodRomDa</a></li>
                            <li><a className="link" href="#"><i className="fab fa-telegram-plane"></i>@RodionDavidenko</a></li>
                        </ul>
                    </div>
                </footer>
            </Page>
}