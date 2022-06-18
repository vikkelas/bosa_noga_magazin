import {combineEpics} from "redux-observable";
import {changeSearchEpic} from "./changeSearchEpic";
import {searchRequestEpic} from "./searchRequestEpic";

const Epics = combineEpics(
    changeSearchEpic,
    searchRequestEpic,
)
export default Epics;
