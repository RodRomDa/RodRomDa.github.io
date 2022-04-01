import React, { useState } from "react";
import Breadcrumbs, {Crumb} from '../blocks/Breadcrumbs';
import {
    Outlet,
    Link,
    NavLink
  } from "react-router-dom";
import Page from './Page';
import logo from '../../img/logo.svg';

export default function Main(props) {

    return  <Page>
                <header>
                    <ul className="menu">
                        <NavLink to="/themes" className="item"><li>Тематики</li></NavLink>
                        <NavLink to="/users" className="item"><li>Пользователи</li></NavLink>
                        <NavLink to="/profile" className="item"><li>Мой профиль</li></NavLink>
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
                            <li><a className="link" href="mailto: rodrom.da@gmail.com"><i className="fas fa-at"></i>rodrom.da@gmail.com</a></li>
                            <li><a className="link" href="https://github.com/RodRomDa/RodRomDa.github.io/tree/dev"><i className="fab fa-github"></i>github.com/RodRomDa</a></li>
                            <li><a className="link" href="https://t.me/RodionDavidenko"><i className="fab fa-telegram-plane"></i>@RodionDavidenko</a></li>
                        </ul>
                    </div>
                </footer>
            </Page>
}