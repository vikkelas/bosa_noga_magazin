import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {
    changeActiveSize,
    countDec,
    countInc,
    fetchProduct,
    stateProductReset
} from "../Redux/Reducer/productSlice";
import Preloader from "./Preloader";
import Error404 from "../pages/Error404";
import {addProductBasket} from "../Redux/Reducer/basketSlice";

const Product = () => {
    const btnStyle = {
        cursor: 'pointer'
    }
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{dispatch(fetchProduct({id}))}, [id, dispatch])
    const {product, loading, images,activeSize, sizes,count, error} = useSelector(state => state.product);
    const changeSizeActive = (e)=>{
        document.querySelectorAll('.catalog-item-size').forEach(item=>{
            item.classList.remove('selected')
        })
        e.target.classList.add('selected')
        dispatch(changeActiveSize(e.target.textContent))

    }
    const addProductCartHandler = ()=>{
        dispatch(addProductBasket({
            id: Number(id),
            count,
            size: activeSize,
            price: product.price,
            title: product.title,
            order: activeSize+id
        }))
        dispatch(stateProductReset());
        document.querySelectorAll('.catalog-item-size').forEach(item=>{
            item.classList.remove('selected')
        })
        navigate('/cart');
    }
    if(loading === 'rejected'){
        return(
            <Error404 message={error}/>
        )
    }
    if(loading){
        return (
            <div className='row'>
                <Preloader/>
            </div>
        )
    }
    if(product){
        return (
            <section className="catalog-item">
                <h2 className="text-center">{product.title}</h2>
                <div className="row">
                    <div className="col-5">
                        <img src={images[0]} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-7">
                        <table className="table table-bordered">
                            <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{product.sku}</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{product.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{product.color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{product.material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{product.season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{product.reason}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="text-center">
                            <p>Размеры в наличии:
                                {sizes.map((item, index)=>{
                                       return(item.avalible && <span style={btnStyle} onClick={changeSizeActive} key={index} className="catalog-item-size">{item.size}</span>)
                                    }
                                )}
                            </p>
                            <p>Количество:
                                <span className="btn-group btn-group-sm pl-2">
                                <button onClick={()=>dispatch(countDec())} className="btn btn-secondary">-</button>
                                <span className="btn btn-outline-primary">{count}</span>
                                <button onClick={()=>dispatch(countInc())} className="btn btn-secondary">+</button>
                            </span>
                            </p>
                        </div>
                        <button onClick={addProductCartHandler} style={btnStyle} disabled={activeSize&&count>0?'':true} className="btn btn-danger btn-block btn-lg">В корзину</button>
                    </div>
                </div>
            </section>
        );
    }

};

export default Product;
