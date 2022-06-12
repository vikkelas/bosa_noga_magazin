import React, {useState} from 'react';
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import './Layout.css'
import headerLogo from '../../assets/img/header-logo.png'
import Banner from "../Banner/Banner";

function Header() {
    const input  = docu
    const [searchInput, setSearchInput] = useState(false)
    const invisible = searchInput?'': 'invisible'
    const changeActiveInputHandler = (e)=>{
        if(searchInput){
            document.getElementById('search-form').input.focus()
        }
        setSearchInput(!searchInput)
    }
    return (
        <>
            <header className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                            <Link className="navbar-brand" to="/">
                                <img src={headerLogo} alt="Bosa Noga"/>
                            </Link>
                            <div className="collapase navbar-collapse" id="navbarMain">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Главная</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/catalog.html">Каталог</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about.html">О магазине</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contacts.html">Контакты</Link>
                                    </li>
                                </ul>
                                <div>
                                    <div className="header-controls-pics">
                                        <div onClick={changeActiveInputHandler} data-id="search-expander" className="header-controls-pic header-controls-search"/>
                                        <div className="header-controls-pic header-controls-cart">
                                            <div className="header-controls-cart-full">1</div>
                                            <div className="header-controls-cart-menu"/>
                                        </div>
                                    </div>
                                    <form data-id="search-form"
                                          className={`header-controls-search-form form-inline `+ invisible}>
                                        <input className="form-control" placeholder="Поиск"/>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner/>
                        <Outlet/>
                    </div>
                </div>
            </main>
            <footer className="container bg-light footer">
                <div className="row">
                    <div className="col">
                        <section>
                            <h5>Информация</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item"><Link to="/about.html" className="nav-link">О магазине</Link></li>
                                <li className="nav-item"><Link to="/catalog.html" className="nav-link">Каталог</Link></li>
                                <li className="nav-item"><Link to="/contacts.html" className="nav-link">Контакты</Link></li>
                            </ul>
                        </section>
                    </div>
                    <div className="col">
                        <section>
                            <h5>Принимаем к оплате:</h5>
                            <div className="footer-pay">
                                <div className="footer-pay-systems footer-pay-systems-paypal"/>
                                <div className="footer-pay-systems footer-pay-systems-master-card"/>
                                <div className="footer-pay-systems footer-pay-systems-visa"/>
                                <div className="footer-pay-systems footer-pay-systems-yandex"/>
                                <div className="footer-pay-systems footer-pay-systems-webmoney"/>
                                <div className="footer-pay-systems footer-pay-systems-qiwi"/>
                            </div>
                        </section>
                        <section>
                            <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
                                аксессуаров.
                                Все права защищены.<br/>Доставка по всей России!
                            </div>
                        </section>
                    </div>
                    <div className="col text-right">
                        <section className="footer-contacts">
                            <h5>Контакты:</h5>
                            <a className="footer-contacts-phone" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
                            <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
                            <a className="footer-contacts-email" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
                            <div className="footer-social-links">
                                <div className="footer-social-link footer-social-link-twitter"/>
                                <div className="footer-social-link footer-social-link-vk"/>
                            </div>
                        </section>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Header;