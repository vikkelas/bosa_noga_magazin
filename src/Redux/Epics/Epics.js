import {combineEpics} from "redux-observable";
import {changeSearchEpic} from "./changeSearchEpic";

const Epics = combineEpics(
    changeSearchEpic
)
export default Epics;
