import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBestsellers} from "../Redux/Reducer/bestsellersSlice";
import Preloader from "./Preloader";
import PreviewCard from "./PreviewCard";
import Error404 from "../pages/Error404";

const Bestsellers = () => {
    const {products, loading, error} = useSelector(state => state.bestsellers);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchBestsellers())
    }, [dispatch])
    if(loading === 'rejected'){
        return(
            <Error404 message={error}/>
        )
    }
    if(loading){
        return (
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                <Preloader/>
            </section>
        )
    }
    if(products.length){
        return (
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                <div className="row">
                    {products.map(item=><PreviewCard key={item.id} infoProducts={item}/>)}
                </div>
            </section>
        );
    }

};

export default Bestsellers;

//preloader useRef global state
