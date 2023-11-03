import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../redux/cartActions"; // Assuming the correct path to the cartActions file

export default function ProductDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const product_id = params.product_id;
  const [productDetails, setProductDetails] = useState({});

  const cartState = useSelector((state) => {
    return state.Total; 
  });

  const addToCartClickHandler = () => {
    dispatch(AddToCart(productDetails));
    alert("Added to Cart!!");
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get(`https://fakestoreapi.com/products/${product_id}`);
        setProductDetails(resp.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [product_id]);

  return (
    <div className="flex justify-center p-4">
      <div className="flex w-4/5">
        <div className="w-1/2 p-4">
          <img src={productDetails.image} alt={productDetails.title} className="object-contain h-96 w-full" />
        </div>
        <div className="w-1/2 p-4">
          <h1 className="text-3xl font-bold">{productDetails.title}</h1>
          <p className="text-gray-500 mb-2">Category: {productDetails.category}</p>
          <p className="text-xl font-semibold mb-2">${productDetails.price}</p>
          <p className="text-gray-800">{productDetails.description}</p>
          <div className="mt-4">
            <button
              onClick={addToCartClickHandler}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
