import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromCart, UpdateQuantity } from '../../redux/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const total = useSelector(state => state.total);

  const handleIncrement = (product) => {
    dispatch(UpdateQuantity(product.id, product.quantity + 1));
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      dispatch(UpdateQuantity(product.id, product.quantity - 1));
    } else {
      dispatch(RemoveFromCart(product.id));
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Cart</h2>
      <h3 className='text-xl font-bold mb-4'>Total Items: {total}</h3>
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 mb-4 flex items-center justify-between shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-24 h-24 object-contain rounded-md mr-4"
          />
          <div className="flex-1">
            <p className="text-lg font-semibold mb-1">{product.title}</p>
            <p className="text-gray-600 mb-2">Price: ${product.price}</p>
            <div className="flex items-center">
              <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2" onClick={() => handleIncrement(product)}>
                +
              </button>
              <p className="text-xl font-semibold mr-2">{product.quantity}</p>
              <button className="bg-red-500 text-white px-3 py-1 rounded mr-2" onClick={() => handleDecrement(product)}>
                -
              </button>

              <div className="text-gray-600 mb-2 flex-1 text-right" >
              <button className="bg-blue-500 text-white p-3 py-1 rounded-lg">
                Check-Out
              </button>
              <p className="text-gray-600 mb-2 flex-1 text-right">Total Price: ${(product.price * product.quantity)}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
