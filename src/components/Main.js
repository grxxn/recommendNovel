import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import MainList from './MainList';

function Main(props) {
  let books = props.books; // List에 books를 넘겨주기 위해 변수에 저장
  let navigate = useNavigate();
  let [listHeight, setListHeight] = useState(0);

  return (
    <div className='mainContainer'>
      {
        props.auth
        ? <button 
            className='logout-btn' 
            onClick={()=>{props.setAuth(false)}}
          >로그아웃</button>
        : <button
            className="login-btn" 
            onClick={()=>navigate('/recommendNovel/login')} 
          >로그인</button>
      }
      <FontAwesomeIcon icon={faCartShopping} className="cart-btn" onClick={()=>{navigate('/recommendNovel/cart')}}/>
      
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
        window.scrollTo(0, listHeight + 220);
      }}>
        둘러보기
      </button>
      <MainList books={books} setListHeight={setListHeight}/>
    </div>
  );
};

export default Main;