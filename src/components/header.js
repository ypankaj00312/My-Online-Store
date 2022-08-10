import React from 'react'
import cart from '../images/cart.webp'
import { Link } from 'react-router-dom'

const Header = () => {
    const headerStyle = {
        fontSize : '25px',
        fontStyle : 'italic',
        
        
       backgroundColor: 'white',
       height : '4rem',
        // zIndex : '10',
        marginTop : 0,

    }
  return (
    <div style={{zIndex:'10',}} className='d-flex flex-row position-fixed top-0 start-0 bg-white vw-100'>
        <div className='fw-bold m-3 text-nowrap' style ={headerStyle}>
        My Online Store
        </div>
        <div className='ms-auto me-5 mt-3' style={{height:'4rem',}}>
          <Link to = '/cart'>
        <img className='h-100 ' src={cart} alt= 'cart ' />
        </Link>
        </div>
        </div>
  )
}

export default Header