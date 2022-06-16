import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {viewInput} from "../Redux/Reducer/searchSlice";

const Search = () => {
    const dispatch = useDispatch();
    const {searchValue} = useSelector(state => state.search);
    // const path = `/items?${activeCategory!=='all'?`categoryId${activeCategory}`:''}${searchValue?`&q=${searchValue}`:''}`
    const searchChangeHandler = (e)=>{
        const{value} = e.target;
        dispatch(viewInput(value))
    }
    return (
        <form className="catalog-search-form form-inline">
            <input className="form-control" onChange={searchChangeHandler} value={searchValue} placeholder="Поиск"/>
        </form>
    );
};
export default Search;
