import {ofType} from "redux-observable";
import {map, switchMap} from "rxjs";
import {ajax} from "rxjs/ajax";
import {searchProducts} from "../Reducer/catalogSlice";

export const searchRequestEpic = (action$, state$) => {
    return action$.pipe(
        ofType('catalog/preloaderActive'),
        map(o=>o.payload),
        map(o=>new URLSearchParams({q: o})),
        switchMap(o=>ajax.getJSON(`${process.env.REACT_APP_URL}/items?${state$.value.categories.activeCategory==='all'?'':`categoryId=${state$.value.categories.activeCategory}`}&${o}`)),
        map(o => searchProducts(o))
    )
}


