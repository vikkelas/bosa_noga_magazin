import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changePhone, changeAddress, changeCheckBox, fetchOrder, resetForm} from "../Redux/Reducer/orderSlice";
import {resetBasket} from "../Redux/Reducer/basketSlice";
import Preloader from "./Preloader";

const Order = () => {
    const styleDiv = {
        maxWidth: '30rem',
        margin: '0 auto',
    }
    const dispatch = useDispatch();
    const {phone, address, checkBox,loading, thanksPage} = useSelector(state => state.order)
    const {basketProducts} = useSelector(state => state.basket)
    const submitOrder = (e)=>{
        e.preventDefault();
        const req = ()=>{
            dispatch(fetchOrder({body:{
                    owner: {
                        phone,
                        address
                    },
                    items: basketProducts
                }}))
            dispatch(resetForm())
            dispatch(resetBasket())
        }
        checkBox && req()
    }
    if(loading){
        return(
            <section className="order">
                <Preloader/>
            </section>
        )
    }
    if(!thanksPage){
        return (
            <section className="order">
                <h2 className="text-center">Оформить заказ</h2>
                <div className="card" style={styleDiv}>
                    <form onSubmit={submitOrder} className="card-body">
                        <div className="form-group">
                            <label htmlFor="phone">Телефон</label>
                            <input value={phone} onChange={(e)=>dispatch(changePhone(e.target.value))} className="form-control" id="phone" placeholder="Ваш телефон"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Адрес доставки</label>
                            <input value={address} onChange={(e)=>dispatch(changeAddress(e.target.value))} className="form-control" id="address" placeholder="Адрес доставки"/>
                        </div>
                        <div className="form-group form-check">
                            <input checked={checkBox} onChange={(e)=>dispatch(changeCheckBox(e.target.checked))} type="checkbox" className="form-check-input" id="agreement"/>
                            <label  className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                        </div>
                        <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                    </form>
                </div>
            </section>
        );
    }
    if(thanksPage){
        return(
            <section className="order">
                <h1>Спасибо за заказ</h1>
            </section>
            )

    }

};

export default Order;
