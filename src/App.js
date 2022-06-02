import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import data from './components/bookData';
import cartData from './components/cartData';
import Detail from './components/Detail';
import Cart from './components/Cart';

function App() {
  let [books, setBooks] = useState(data);
  let [cart, setCart] = useState(cartData);
  // detail 페이지에서 데이터를 받아올 수 있도록 이벤트핸들러 작성
  let cartHandler = function(currentId) {
    // 하트를 누른 책의 id, 이름, 작가를 state에 저장
    // 중복 방지를 위해 set 자료형 사용
    const cartArr = [...cart];
    cartArr.push({id: parseInt(currentId), title: books[currentId].title, writer: books[currentId].writer});

    let cartSet = [...new Set(cartArr.map(JSON.stringify))].map(JSON.parse);

    setCart(cartSet);
    localStorage.setItem('cart', JSON.stringify(cartSet));
  }
  return (
    <Routes>
      <Route path='/' element={<Main books={books}/>} />
      <Route path='/detail/:id' element={<Detail books={books} cartHandler={cartHandler}/>} />
      <Route path='/cart' element={<Cart cart={cart}/>} />
    </Routes>
  );
}

function Main(props) {
  let books = props.books; // List에 books를 넘겨주기 위해 변수에 저장
  let navigate = useNavigate();
  return (
    <div className='mainContainer'>
      <FontAwesomeIcon icon={faCartShopping} className="cart-btn" onClick={()=>{navigate('/cart')}}/>
      <h1>소설<br/>뭐읽지?</h1>
      <p>
        여러분에게 다양한 소설을 추천해드립니다. 
        <br/><br/>
        책은 내가 가보지 못 했던, 보지 못 했던 관점들을 내던집니다. <br/>
        내가 가보지 못 했던 여행지와 배경 그리고 사람을 만나게 하고, 내가 보지 못 했던 관점들을 작가의 눈이나 혹은 소설 속 등장인물의 눈을 통해 보게 합니다. 그래서 가끔 '소설을 읽는 게 도움이 될까?'하는 의문을 가지는 분들이 있는데, 이러한 부분에 의해서 소설을 읽는 것 역시 도움이 됩니다. 비록 직접적이진 않지만 책을 통해 접하는 간접적 경험은 내가 현재 보고 있는 것들, 혹은 내가 후에 볼 것들에 대한 선행 학습과도 같습니다. 책을 읽음으로써 내 삶에 대입해 보고, 응용해 볼 수 있는 기회를 먼저 가지는 셈이죠. 누군가의 관점을 취할 수 있는 것, 그게 바로 독서의 장점 중 하나일 것입니다. 
        <br/><br/>
        책에는 다양한 분야가 있습니다. 소설, 에세이, 시, 경제/경영, 자기계발, 인문, 역사, 정치, 과학, 예술. 여러분은 이 다양한 분야 중 어떠한 분야를 가장 선호하시나요? 선호하는 분야는 각자 다르지만 책에 가장 쉽게 입문할 수 있는 분야는 소설이라고 생각합니다. 소설책은 다양한 사람의 다양한 이야기가 들어있습니다. 그것도 아주 많이요. 추천드리는 소설책을 읽어가며 더 다양한 분야로 넓혀가보는 것도 추천드립니다.
        <br/><br/>
        '소설 뭐읽지?'에서는 다양한 소설책을 구경할수도, 여러분의 취향에 맞는 책을 찜할 수도 있습니다. 하트를 눌러 마음에 드는 책을 저장하고, 카트 버튼을 눌러 저장한 책을 모두 볼 수 있습니다. 이제 다양한 소설을 만나러 가볼까요?
      </p>
      <button className='scroll-btn' onClick={()=>{
        const list = document.querySelector('.book-list');
        window.scrollTo(0, list.offsetTop + 220);
      }}>
        둘러보기
      </button>
      <List books={books}/>
    </div>
  )
}

function List(props) {
  let navigate = useNavigate();
  return (
    <div className='book-list'>
      {props.books.map((a, i) => {
        let bookImg = "./img/book"+(i+1)+".jpg";
        return (
          <div className='book-list-card' key={i} onClick={()=>{
            navigate('/detail/' + props.books[i].id);
            window.scrollTo(0,0);}}>
            <span className='book-list-img'>
              <img src={require("./img/book"+ (props.books[i].id) +".jpg")} />
            </span>
            <p className='title'>{props.books[i].title}</p>
            <p className='writer'>{props.books[i].writer}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App;
