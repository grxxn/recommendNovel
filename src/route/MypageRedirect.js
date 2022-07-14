import React from 'react';
import { Navigate } from 'react-router-dom';
import Cart from '../components/Cart';

const MypageRedirect = ({auth}) => {
  return auth ? <Cart /> : <Navigate to='/recommendNovel/login' />
};

export default MypageRedirect;