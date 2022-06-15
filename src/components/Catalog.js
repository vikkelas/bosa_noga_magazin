import React from 'react';
import Categories from "./Categories";
import CatalogList from "./CatalogList";
import {useDispatch, useSelector} from "react-redux";
import {fetchReplenishmentCatalog} from "../Redux/Reducer/catalogSlice";

const Catalog = () => {
    const dispatch = useDispatch();
    const {products, loading, serverEmpty} = useSelector(state => state.catalog);
    const {activeCategory} = useSelector(state => state.categories);
    const path = activeCategory==='all'?`/items?offset=${products.length}`: `/items?categoryId=${activeCategory}&offset=${products.length}`;
    const btnDisabled = (loading||serverEmpty)?'disabled':'';
    const loadingProducts =()=>{dispatch(fetchReplenishmentCatalog({path}))}

    return (
        <>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                <Categories/>
                <CatalogList/>
                <div className="text-center mt-4">
                    <button disabled={btnDisabled} onClick={loadingProducts} className="btn btn-outline-primary">Загрузить ещё</button>
                </div>
            </section>
        </>
    );
};

export default Catalog;
