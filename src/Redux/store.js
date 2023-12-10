import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import FormReducer from "./reducers";

const persistConfig = {
    key: "formData",
    storage,
};

const persistedReducer = persistReducer(persistConfig, FormReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
