import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCatalog} from "../Redux/Reducer/catalogSlice";
import Preloader from "./Preloader";
import PreviewCard from "./PreviewCard";

const CatalogList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(fetchCatalog({path: '/items'}))}, [dispatch])
    const{loading, products} = useSelector(state => state.catalog);
    if(loading){
        return (
            <div className='row'>
                <Preloader/>
            </div>
        )
    }
    if(products.length){
        return (
            <div className='row'>
                {products.map(item=><PreviewCard key={item.id} infoProducts={item}/>)}
            </div>
        );
    }
};

export default CatalogList;
