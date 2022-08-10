
export const setProduct = (productData)=>{
    return{
        type: 'setProduct',
        payload: productData,
    }
}

export const setSelectedProduct = (productData)=>{
    return{
        type: 'setSelectedProduct',
        payload: productData,
    }
}
export const removeSelectedProduct = ()=>{
    return{
        type: 'removeSelectedProduct',
       
    }
}
export const incQuantity = ()=>{
    return{
        type: 'incQuantity',
       
    }
}
export const decQuantity = (quantity)=>{
    return{
        type: 'decQuantity',
        payload: quantity,
       
    }
}
export const resetItemQuantity = (cartItemList)=>{
    return{
        type: 'resetItemQuantity',
        payload: cartItemList,
       
    }
}
export const addToCart = (cartItemList)=>{
    return{
        type: 'addToCart',
        payload: cartItemList,
       
    }
}


