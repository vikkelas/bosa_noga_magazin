import React, {useCallback, useRef, useState} from 'react';
import {Outlet, useNavigate} from "react-router";
import {NavLink, Link} from "react-router-dom";
import './Layout.css'
import headerLogo from '../../assets/img/header-logo.png'
import Banner from "../Banner";
import {viewInput} from "../../Redux/Reducer/searchSlice";
import {useDispatch, useSelector} from "react-redux";

function Layout() {
    const [searchInput, setSearchInput] = useState('')
    const inputRef = useRef(null);
    const formRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {basketProducts} = useSelector(state => state.basket)

    const changeInputHandler = (e)=>{
        const {value} = e.target
        setSearchInput(value)
    }
    const focusInput = useCallback(()=>{
        if(!formRef.current.classList.contains('invisible'))
        inputRef.current.focus()},[])

    const changeActiveInput = ()=>{
        formRef.current.classList.toggle('invisible');
        focusInput()
        if(searchInput){
            navigate('/catalog')
            dispatch(viewInput(searchInput))
            setSearchInput('')
        }
    }
    return (
        <>
            <header className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                            <NavLink className="navbar-brand" to="/">
                                <img src={headerLogo} alt="Bosa Noga"/>
                            </NavLink>
                            <div className="collapase navbar-collapse" id="navbarMain">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Главная</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/catalog">Каталог</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">О магазине</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
                                    </li>
                                </ul>
                                <div>
                                    <div className="header-controls-pics">
                                        <div onClick={changeActiveInput} data-id="search-expander" className="header-controls-pic header-controls-search"/>
                                        <div onClick={()=>navigate('/cart')} className="header-controls-pic header-controls-cart">
                                            {basketProducts.length>0&&<div className="header-controls-cart-full">{basketProducts.length}</div>}
                                            <div className="header-controls-cart-menu"/>
                                        </div>
                                    </div>
                                    <form ref={formRef} data-id="search-form"
                                          className='header-controls-search-form form-inline invisible'>
                                        <input ref={inputRef} onChange={changeInputHandler} value={searchInput} className="form-control" placeholder="Поиск"/>
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
                                <li className="nav-item"><Link to="/about" className="nav-link">О магазине</Link></li>
                                <li className="nav-item"><Link to="/catalog" className="nav-link">Каталог</Link></li>
                                <li className="nav-item"><Link to="/contacts" className="nav-link">Контакты</Link></li>
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

export default Layout;
