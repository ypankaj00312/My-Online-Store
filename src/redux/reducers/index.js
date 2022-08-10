import { combineReducers } from "redux";
import {productsReducer,selectedProductReducer,itemQuantity, addToCart} from "./productreducer";



const reducer = combineReducers({
    products : productsReducer ,
    selectedProduct:selectedProductReducer,
    itemQuantity : itemQuantity,
    addToCart : addToCart,
})


export default reducer;