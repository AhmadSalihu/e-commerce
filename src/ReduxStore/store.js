import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './cartReducer';
import { productDetailsReducer, produtcReducer } from './productReducers';

const initialState = {
	cart: {
		cartItems: localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],
	}
};

const reducer = combineReducers({
	productList: produtcReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));


export default store;