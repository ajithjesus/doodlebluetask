/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { createStore, combineReducers ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ProductListReducer from './redux/reducers/ProductList';


const rootReducer = combineReducers(
    { 
      ProductListReducer:ProductListReducer }
    );
const store=createStore(rootReducer, applyMiddleware(thunk));


const RNRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  )
AppRegistry.registerComponent(appName, () => RNRedux);
