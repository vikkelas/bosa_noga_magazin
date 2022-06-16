import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {viewInput} from "../Redux/Reducer/searchSlice";
import {fetchCatalog} from "../Redux/Reducer/catalogSlice";

const Search = () => {
    const dispatch = useDispatch();
    const {searchValue} = useSelector(state => state.search);
    const {activeCategory} = useSelector(state => state.categories)
    const path = `/items?${activeCategory!=='all'?`categoryId${activeCategory}`:''}${searchValue?`&q=${searchValue}`:''}`
    const reqTime = setTimeout(()=>dispatch(fetchCatalog({path})),1000)
    const searchChangeHandler = (e)=>{
        const{value} = e.target;
        dispatch(viewInput(value))
        clearTimeout(reqTime)

    }

    return (
        <form className="catalog-search-form form-inline">
            <input className="form-control" onChange={searchChangeHandler} value={searchValue} placeholder="Поиск"/>
        </form>
    );
};

export default Search;
