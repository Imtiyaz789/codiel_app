import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "../reducers/index";

let store;
export function configureStore(){
    store = createStore(reducers, applyMiddleware(thunk, logger));
    return store;
}