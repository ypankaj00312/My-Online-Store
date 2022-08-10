const initialState = {products:[]}

export const productsReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case 'setProduct' :
            return {...state,products:payload};
        default :
         return state;
    }


}

const initialProduct = {product:[]}
 
export const selectedProductReducer = (state = initialProduct,action)=>{
    switch(action.type){
        case 'setSelectedProduct':
            return {...state,product:action.payload}
        case 'removeSelectedProduct':
            return {...state,product:initialProduct.product}
        default:
            return state
    }
}
const initialQuantity = {quantity:0,cartItemList:[]};
export const itemQuantity = (state = initialQuantity,action)=>{
    switch(action.type){
        case 'incQuantity':
            return {...state,quantity: state.quantity + 1}
        case 'decQuantity':
            if(action.payload) {return {...state,quantity:state.quantity - 1}}
            else
            {return state}
        case 'resetItemQuantity':
            // console.log('action.payload', action.payload)
            return {...state,quantity: initialQuantity.quantity}
            // return {...state,quantity: initialQuantity.quantity,cartItemList:[...state.cartItemList,action.payload]}
            
        default:
            return state
    }
}
const initialCartItem = {cartItemList:[],addCartStatus:"Add To Cart"};
export const addToCart = (state = initialCartItem,action)=>{
    switch(action.type){
        case 'addToCart':
            return {...state,cartItemList:action.payload,addCartStatus:'Added To Cart'}
        // case 'decQuantity':
        //     if(action.payload) {return {...state,quantity:state.quantity - 1}}
        //     else
        //     {return state}
        // case 'resetItemQuantity':
        //     // console.log('action.payload', action.payload)
        //     return {...state,quantity: initialQuantity.quantity}
        //     // return {...state,quantity: initialQuantity.quantity,cartItemList:[...state.cartItemList,action.payload]}
            
        default:
            return state
    }
}
