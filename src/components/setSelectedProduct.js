import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { setSelectedProduct,removeSelectedProduct ,incQuantity,decQuantity,resetItemQuantity,addToCart} from "../redux/actions/products";

const SetSelectedProduct = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct.product);
  const itemQuantity = useSelector((state) => state.itemQuantity.quantity);
  const addCartStatus = useSelector((state)=>state.addToCart.addCartStatus);
  
  
  const dispatch = useDispatch();
  const { productId } = useParams();

  const getSelectedProduct = async (id) => {
    // console.log('id', id)
    const product = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.log(err));
    dispatch(setSelectedProduct(product.data));

    //adding quantity to product data
    product.data["quantity"] = itemQuantity
    dispatch(resetItemQuantity(product.data));
    // console.log("selectedProduct", selectedProduct);
  };

  useEffect(() => {
    getSelectedProduct(productId);
    dispatch(removeSelectedProduct());
    
  }, [productId]);
  // console.log("selectedProduct", selectedProduct);
  return (
    <div style={{ width: "40vw", marginTop: "5rem" }}>
      {selectedProduct.length !== 0 ? (
        <div className="card d-flex flex-row m-5">
          <img
            src={selectedProduct.image}
            className="card-img-top col-3 rounded "
            alt="..."
            style={{ height: "30rem" }}
          />
          <div className="card-body m-5 ">
            <h5 className="card-title " style={{ width: "30rem" }}>
              {selectedProduct.title}
            </h5>
            <p className="card-text text-secondary">
              {selectedProduct.category}
            </p>
            <p className="card-text text-dark">{selectedProduct.description}</p>
            <p className="fw-bold">&#36;{selectedProduct.price}</p>
            <div
              className="btn-group d-block mb-4"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn border-dark" onClick={()=>dispatch(decQuantity(itemQuantity))}>
                -
              </button>
              <button type="input" className="btn border-dark">
                {itemQuantity}
              </button>
              <button type="button" className="btn border-dark" onClick={()=>dispatch(incQuantity())}>
                +
              </button>
            </div>
            <div className="btn btn-primary" onClick={()=>dispatch(addToCart({...selectedProduct,itemQuantity}))}>{addCartStatus}</div>
          </div>
        </div>
      ) : (
        <div style={{width:'20rem',margin:'auto',marginTop:'40vh',}}>Loading...</div>
      )}
    </div>
  );
};

export default SetSelectedProduct;
