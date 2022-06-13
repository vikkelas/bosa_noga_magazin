import React from 'react';
import {NavLink} from "react-router-dom";

const Categories = () => {
    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <ul className="catalog-categories nav justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link active">Все</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link">Женская обувь</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link">Мужская обувь</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link">Обувь унисекс</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link">Детская обувь</NavLink>
                </li>
            </ul>
            <div className="text-center">
                <button className="btn btn-outline-primary">Загрузить ещё</button>
            </div>
        </section>
    );
};

export default Categories;
