import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
    const cartitems = useSelector((state) => state.itemQuantity.cartItemList);

  console.log("addToCart", cartitems);
  const cartitemsUnique = [...new Set(cartitems)];
  console.log('cartitemsUnique', cartitemsUnique)
    
  return (<>
    <div className='m-5'>Cart</div>
    <div className='m-5'>Cart</div>
    <div className='m-5'>Cart</div>
    </>
  )
}

export default Cart