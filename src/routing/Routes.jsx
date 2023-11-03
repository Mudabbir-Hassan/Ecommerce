import React from 'react';
import UserAuthState from '../context/user/UserAuthState';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Products from '../pages/Products';
import Signup from '../pages/Signup';
import Errorpage from '../pages/PageNotFound';
import ProductDetails from '../pages/Product_Details';
import NavBar from '../pages/NavBar';
import Protected from '../pages/Protected/protected';
import Checkout from '../pages/CheckOut';

const MyRoutes = () => {
  return (
    <div>
      <UserAuthState>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='cart' element={<Protected Component={Cart} />} />
          <Route path='products' element={<Products />} />
          <Route path='check-out' element={<Protected Component={Checkout} />} />
          <Route path='products/:product_id' element={<ProductDetails />} />
        </Route>
        <Route path='log-in' element={<Login />} />
        <Route path='sign-up' element={<Signup />} />
        <Route path='errorpage' element={<Errorpage />} />
      </Routes>
      </UserAuthState>
    </div>
  );
};

export default MyRoutes;
