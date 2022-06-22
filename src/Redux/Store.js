import {configureStore} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./Reducer/rootReducer";
import {createEpicMiddleware} from "redux-observable";
import Epics from "./Epics/Epics";

const epicMiddleware = createEpicMiddleware();
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['basket']

}
const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(epicMiddleware),
    devTools: true,
})
epicMiddleware.run(Epics)
export const persist = persistStore(store)
export default store;
