import React from 'react';
import Categories from "./Categories";
import CatalogList from "./CatalogList";
import BtnLoad from "./BtnLoad";

const Catalog = () => {
    return (
        <>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                <Categories/>
                <CatalogList/>
                <BtnLoad/>
            </section>
        </>
    );
};

export default Catalog;
