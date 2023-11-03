import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCart(props) {
  return (
    <NavLink to={`${props.id}`}>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-[320px] mx-auto w-full bg-gray-300 cursor-pointer group rounded-2xl transition-all duration-300 ease-in-out"
      >
        <p className="underline capitalize text-center font-semibold pt-2">{props.category}</p>
        <div className="h-80 w-full">
          <motion.img
            layout
            src={props.image}
            alt={props.name}
            className="mix-blend-multiply overflow-hidden object-contain h-full w-full p-6"
            style={{
              transition: 'transform 0.5s',
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <div className="text-center p-4 h-22">
          <h3 className="truncate" title={props.name}>{props.name}</h3>
          <h3 className="truncate">{props.id}</h3>
          <p className='text-blue-500'>${props.price}</p>
        </div>
        <div className="bg-blue-500 text-white p-2 text-center rounded-b-2xl group-hover:bg-yellow-500 group-hover:font-bold group-hover:text-black transition-all duration-300 ease-in-out">
          <p>
            View Product
          </p>
        </div>
      </motion.div>
    </NavLink>
  );
}
