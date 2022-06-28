import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Main from './components/Main';
import axios from 'axios';

function App() {
  let [books, setBooks] = useState([]);
  let [cart, setCart] = useState([]);

  useEffect(()=> {
    axios('./data/bookData.json')
    .then(response => setBooks(response.data));

    axios('./data/cartData.json')
    .then(response => setCart(response.data));
  }, [])

  // detail 페이지에서 데이터를 받아올 수 있도록 이벤트핸들러 작성
  let cartHandler = function(currentId) {
    // 하트를 누른 책의 id, 이름, 작가를 state에 저장
    // 중복 방지를 위해 set 자료형 사용
    const cartArr = [...cart];
    cartArr.push({"id": parseInt(currentId), "title": books[currentId].title, "writer": books[currentId].writer});
    let cartSet = [...new Set(cartArr.map(JSON.stringify))].map(JSON.parse);

    setCart(cartSet);
    localStorage.setItem('cart', JSON.stringify(cartSet));
  }

  return (
    <Routes>
      <Route path='/recommendNovel' element={<Main books={books}/>} />
      <Route path='/recommendNovel/detail/:id' element={<Detail books={books} cartHandler={cartHandler}/>} />
      <Route path='/recommendNovel/cart' element={<Cart cart={cart}/>} />
    </Routes>
  );
}

export default App;
