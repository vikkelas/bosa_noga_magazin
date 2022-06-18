import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchReplenishmentCatalog} from "../Redux/Reducer/catalogSlice";

const BtnLoad = () => {
    const dispatch = useDispatch();
    const {products, loading, serverEmpty} = useSelector(state => state.catalog);
    const {activeCategory} = useSelector(state => state.categories);
    const {searchValue} = useSelector(state => state.search);
    const pathSearch = new URLSearchParams({q: searchValue})
    const path = activeCategory==='all'?`/items?offset=${products.length}${searchValue?`&${pathSearch}`:''}`: `/items?categoryId=${activeCategory}&offset=${products.length}${searchValue?`&${pathSearch}`:''}`;
    const btnDisabled = (loading||serverEmpty)?'disabled':'';
    const loadingProducts =()=>{dispatch(fetchReplenishmentCatalog({path}))}
    return (
        <div className="text-center mt-4">
            <button disabled={btnDisabled} onClick={loadingProducts} className="btn btn-outline-primary">Загрузить ещё</button>
        </div>
    );
};

export default BtnLoad;
