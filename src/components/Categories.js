import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories, changeActiveCategory} from "../Redux/Reducer/categoriesSlice";
import {clearProducts, fetchCatalog, fetchReplenishmentCatalog} from "../Redux/Reducer/catalogSlice";

const Categories = () => {
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(fetchCategories())}, [dispatch])
    const {categoriesList} = useSelector(state => state.categories)
    const {searchValue} = useSelector(state=>state.search)
    const changeActiveHandler = (e)=>{
        const pathSearch = new URLSearchParams({q: searchValue});
        document.querySelectorAll('.categories-link').forEach(item=>item.classList.remove('active'))
        e.currentTarget.querySelector('.categories-link').classList.add('active');
        dispatch(changeActiveCategory(e.currentTarget.id))
        dispatch(clearProducts())
        if(e.currentTarget.id==='all'){
            dispatch(fetchCatalog({path: `/items${searchValue?`?${pathSearch}`:''}`}))
        }else{
            dispatch(fetchReplenishmentCatalog({path: `/items?categoryId=${e.currentTarget.id}${searchValue?`&${pathSearch}`:''}`}))
        }

    }
        return (
                <ul className="catalog-categories nav justify-content-center">
                    <li onClick={changeActiveHandler} className="nav-item" id='all'>
                        <div className="categories-link nav-link active">Все</div>
                    </li>
                    {categoriesList.map(item=>
                        <li onClick={changeActiveHandler} key={item.id} className="nav-item" id={item.id}>
                            <div className="categories-link nav-link">{item.title}</div>
                        </li>
                    )}
                </ul>
        );
};

export default Categories;
