import {ofType} from "redux-observable";
import {debounceTime, filter, map} from "rxjs";
import {searchRequest} from "../Reducer/searchSlice";


export const changeSearchEpic = action$ => action$.pipe(
    ofType('search/viewInput'),
    map(o=>o.payload.trim()),
    filter(o=>o!==''),
    debounceTime(3000),
    map(o=> searchRequest(o))
)
