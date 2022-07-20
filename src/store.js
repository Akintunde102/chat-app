import { configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createStateSyncMiddleware, initMessageListener } from "redux-state-sync";
import rootReducer from './reducers/rootReducer'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const reduxStateSyncConfig = {};


const store = configureStore({
    reducer: persistedReducer,
    middleware: [createStateSyncMiddleware(reduxStateSyncConfig)]
});

store.subscribe(() => { console.log("store changed") });
const persistor = persistStore(store);

initMessageListener(store);


export { store, persistor };