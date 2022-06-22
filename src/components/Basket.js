import React from 'react';
import {Link} from "react-router-dom";
import {deleteProductBasket} from "../Redux/Reducer/basketSlice";
import {useDispatch, useSelector} from "react-redux";

const Basket = () => {
    const {basketProducts} = useSelector(state => state.basket)
    const dispatch = useDispatch();
    let allPrice=0;
    basketProducts.forEach(item=>
        allPrice += item.count * item.price
    )
    return (
        <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Размер</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Итого</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                {basketProducts.map((item,index)=>
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td><Link to={`/catalog/${item.id}`}>{item.title}</Link></td>
                        <td>{item.size}</td>
                        <td>{item.count}</td>
                        <td>{item.price} руб.</td>
                        <td>{item.count*item.price} руб.</td>
                        <td>
                            <button onClick={()=>dispatch(deleteProductBasket(item.order))} className="btn btn-outline-danger btn-sm">Удалить</button>
                        </td>
                    </tr>
                )}
                <tr>
                    <td colSpan="5" className="text-right">Общая стоимость</td>
                    <td>{allPrice} руб.</td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Basket;
