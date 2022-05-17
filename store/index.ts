import { applyMiddleware, combineReducers } from "redux";
import jobReducer from "./reducers/jobReducer";
import { JobState } from "./types/job";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { legacy_createStore as createStore } from 'redux';
import { persistStore } from "redux-persist";
import { composeWithDevTools } from 'redux-devtools-extension';



const persistConfig = {
    key: "root",
    storage: storage
};

export interface AppState {
    job: JobState;
}

const rootReducer = combineReducers<AppState>({
    job: jobReducer,
});

const persist = persistReducer(persistConfig, rootReducer);

export const store = createStore(persist, composeWithDevTools(applyMiddleware()));
export const persistor = persistStore(store);

