import React from 'react';
import {Navigate} from 'react-router-dom';
import Login from './../components/Login/Login';

const MypageRedirect = ({auth}) => {
  return auth ? <Login /> : <Navigate to='/recommendNovel/mypage' />
};

export default MypageRedirect;