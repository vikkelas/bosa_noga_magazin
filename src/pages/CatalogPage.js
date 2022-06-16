import React from 'react';
import Search from "../components/Search";
import Categories from "../components/Categories";
import CatalogList from "../components/CatalogList";
import BtnLoad from "../components/BtnLoad";

const CatalogPage = () => {
    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <Search/>
            <Categories/>
            <CatalogList/>
            <BtnLoad/>
        </section>
    );
};

export default CatalogPage;
