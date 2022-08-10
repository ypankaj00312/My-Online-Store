import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Productrenderer = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products);
  return (
    <div className=" container d-flex flex-wrap mt-5">
     { products.map((product)=>
     {  
        return(<div key ={product.id} className="card col-3 mt-5 " >
          <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
        <img src={product.image} className="card-img-top" style={{height:'15rem'}} alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{height:'3rem',overflow:'hidden'}}>{product.title}</h5>
          <p className="card-text" style={{height:'2rem'}}>
          {product.category}
          </p>
          <p  className="btn btn-primary">
          &#36; {product.price}
          </p>
        </div>
        </Link>
      </div>)})}
    </div>
  );
};

export default Productrenderer;
