import React,{useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import axios from 'axios'
import { setProduct } from '../redux/actions/products'
import Productrenderer from './productrenderer'


const Productlist = () => {

    
const product = useSelector((state)=>state.products)
console.log('product', product)
const dispatch = useDispatch()

const getProducts = async()=>
{const res = await axios.get('https://fakestoreapi.com/products').catch(err=>{console.log(err)});
  dispatch(setProduct(res.data));
 
}
useEffect(()=>{
    getProducts()
    
}
,[]
)




  return (
    <div className='container'>
       <Productrenderer />
    </div>
  )
}

export default Productlist