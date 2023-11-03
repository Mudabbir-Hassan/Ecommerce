import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCart from "../../components/ProductCart";
import { motion } from "framer-motion";

export default function Product() {
  const [products, SetProducts] = useState([]);
  const [searchedInput, setSearchedInput] = useState("");
  const [filteredArr, setFilteredArr] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [category, setCategory] = useState("all");
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await axios.get("https://fakestoreapi.com/products");
      SetProducts(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const filtered = products
      .filter(
        (product) =>
          product.title.toLowerCase().includes(searchedInput.toLowerCase()) &&
          ((category === "all" || product.category === category)) &&
          (!minPrice || product.price >= parseFloat(minPrice)) &&
          (!maxPrice || product.price <= parseFloat(maxPrice))
      )
      .sort((a, b) => (a.title > b.title ? 1 : -1));

    setFilteredArr(filtered);
  }, [searchedInput, minPrice, maxPrice, products, category]);

  return (
    <div className="p-10">
      <div className="flex items-center justify-center my-10 ">
        <input
          className="w-96 px-3 py-2 border rounded-lg"
          type="text"
          placeholder="Search..."
          value={searchedInput}
          onChange={(e) => setSearchedInput(e.target.value)}
        />
        <input
          className="w-32 mx-2 py-2 border rounded-lg text-center"
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          className="w-32 mx-2 py-2 border rounded-lg text-center"
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-center mt-5">
      {!showCategories && ( <button
          className="w-[120px] mx-1  capitalize text-white text-lg font-bold p-2 bg-red-500 hover:scale-105 hover:bg-[yellow] hover:text-black cursor-pointer rounded-lg transition-all duration-300 ease-in-out"
          onClick={() => setShowCategories(!showCategories)}
        >
         {category}
        </button>
      )}
        {showCategories && (
          <div className="flex ">
            <button
              className="w-[120px] mx-1 text-white text-lg font-bold p-2 bg-blue-500 hover:scale-105  hover:bg-[yellow] hover:text-black cursor-pointer rounded-lg transition-all duration-300 ease-in-out"
              onClick={() => {setCategory("all"); setShowCategories(!showCategories)}}
            >
              All
            </button>
            <button
              className="w-[120px] mx-1 text-white text-lg font-bold p-2 bg-blue-500 hover:scale-105  hover:bg-[yellow] hover:text-black cursor-pointer rounded-lg transition-all duration-300 ease-in-out"
              onClick={() => {setCategory("jewelery"); setShowCategories(!showCategories)}}
            >
              Jewelery
            </button>
            <button
              className="w-[120px] mx-1 text-white text-lg font-bold p-2 bg-blue-500 hover:scale-105 hover:bg-[yellow] hover:text-black cursor-pointer rounded-lg transition-all duration-300 ease-in-out"
              onClick={() => {setCategory("electronics"); setShowCategories(!showCategories)}}
            >
              Electronics
            </button>
            <button
              className="w-[120px] mx-1 capitalize text-white text-lg font-bold p-2 bg-blue-500 hover:scale-105 hover:bg-[yellow] hover:text-black cursor-pointer rounded-lg transition-all duration-300 ease-in-out"
              onClick={() => {setCategory("men's clothing"); setShowCategories(!showCategories)}}
            >
              Mens
            </button>
            <button
              className="w-[120px] mx-1 text-white text-lg font-bold p-2 bg-blue-500 hover:scale-105 hover:bg-[yellow] capitalize hover:text-black cursor-pointer rounded-lg transition-all duration-300 ease-in-out"
              onClick={() => {setCategory("women's clothing"); setShowCategories(!showCategories)}}
            >
              Womens
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {filteredArr.map((item, index) => (
          <motion.div layout key={item.id}>
            <ProductCart
              id={item.id}
              name={item.title}
              price={item.price}
              image={item.image}
              category={item.category}
              description={item.description}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
