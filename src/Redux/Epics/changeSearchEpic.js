import {ofType} from "redux-observable";
import {debounceTime, map} from "rxjs";
import {preloaderActive} from "../Reducer/catalogSlice";

export const changeSearchEpic = action$ => action$.pipe(
    ofType('search/viewInput'),
    map(o=>o.payload.trim()),
    debounceTime(200),
    map(o=> preloaderActive(o))
)
