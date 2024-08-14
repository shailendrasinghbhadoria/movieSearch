import { legacy_createStore as createStore } from "redux";
//import { createStore } from "redux";
//import {configureStore}  from "@reduxjs/toolkit";

import rootReducers from "./reducers/index";

const store = createStore(rootReducers);

export default store;
